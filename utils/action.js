'use server'
import OpenAI from 'openai'
import prisma from './db'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const AIResponse = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assitant' },
        ...messages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    })
    return response.choices[0].message
  } catch (error) {
    return null
  }
}

export const getExistingTour = async ({ city, country }) => {
  const tour = await prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  })
  return tour
}
export const generateTourResponse = async ({ city, country }) => {
  const query = `Find a ${city} in this ${country}.
If ${city} in this ${country} exists, create a list of things families can do in this ${city}, ${country}.
Once you have a list, create a one-day tour. Response should be in the following JSON format:
{
  "tour":{
    "city":"${city}",
    "country":"${country}",
    "title":"title for the tour",
    "description":"description of the city and tour",
    "stops":["short name", "Short name", "short name"]
  }
}
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return {"tour":null}, with no additional characters.`
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a tour guide' },
        { role: 'user', content: query },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    })
    const tourData = JSON.parse(response.choices[0].message.content)
    if (!tourData.tour) {
      return null
    }
    return tourData.tour
  } catch (error) {
    console.log(error)
    return null
  }
}
export const createNewTour = async (tour) => {
  return await prisma.tour.create({
    data: tour,
  })
}

export const getAllTours = async (searchTerm) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: 'asc',
      },
    })
    return tours
  }
  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            startsWith: searchTerm,
          },
        },
        {
          country: {
            startsWith: searchTerm,
          },
        },
      ],
    },
    orderBy: {
      city: 'asc',
    },
  })
  return tours
}

export const getSingleTour = async (id) => {
  return await prisma.tour.findUnique({
    where: { id },
  })
}
