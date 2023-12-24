'use client'

import { getAllTours } from '@/utils/action'
import { useQuery } from '@tanstack/react-query'
import TourList from './TourList'

const Tours = () => {
  const { data, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  })
  return (
    <>
      {isPending ? <span className='loading'></span> : <TourList data={data} />}
    </>
  )
}

export default Tours
