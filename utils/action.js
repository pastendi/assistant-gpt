'use server'
import OpenAI from 'openai'

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
