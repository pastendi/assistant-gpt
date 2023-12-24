import Tours from '@/components/Tours'
import { getAllTours } from '@/utils/action'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

const TourPage = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Tours />
    </HydrationBoundary>
  )
}

export default TourPage
