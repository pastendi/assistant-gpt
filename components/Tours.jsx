'use client'

import { getAllTours } from '@/utils/action'
import { useQuery } from '@tanstack/react-query'
import TourList from './TourList'
import { useState } from 'react'

const Tours = () => {
  const [search, setSearch] = useState('')
  const { data, isPending } = useQuery({
    queryKey: ['tours', search],
    queryFn: () => getAllTours(search),
  })
  return (
    <>
      <form className='max-w-lg mb-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='enter city or country here...'
            className='input input-bordered join-item w-full'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            className='btn btn-primary join-item'
            type='submit'
            disabled={isPending}
            onClick={() => setSearch('')}
          >
            {isPending ? 'Please wait...' : 'Reset'}
          </button>
        </div>
      </form>
      {isPending ? <span className='loading'></span> : <TourList data={data} />}
    </>
  )
}

export default Tours
