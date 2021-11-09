import { useRouter } from 'next/router'
import { Skeleton, Stack } from '@mui/material'

const Slug = () => {
  console.log(useRouter())
  const router = useRouter()
  console.log(router.query)

  return (
    <>
      <h2>动态路由</h2>
      <Stack spacing={1}>
        <Skeleton variant='text' />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={118} />
      </Stack>
      <botton onClick={() => router.push('/')}>localhost:3000/</botton>
    </>
  )
}
export default Slug
