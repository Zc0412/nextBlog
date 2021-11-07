import {useRouter} from "next/router";

const Slug = () => {
  console.log(useRouter())
  const router = useRouter()
  console.log(router.query)

  return (
      <>
        <h2>动态路由</h2>
        <botton onClick = {()=>router.push('/')}>localhost:3000/</botton>
      </>
  )
}
export default Slug