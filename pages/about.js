import Nav from '@/components/Nav'

import Button from '@/components/button'

export default function About(props) {
  console.log(props)
  return (
    <>
      <h1>About</h1>
      <Nav />
      <Button />
    </>
  )
}

export async function getStaticProps(context) {
  console.log(context)
  // 数据请求
  const res = await fetch(`http://localhost:4001/api/hello`)
  const data = await res.json()
  console.log(data)
  /*return {
    notFound:true
  }*/
  return {
    props: {
      data: 123,
      hello: data,
    },
  }
}
