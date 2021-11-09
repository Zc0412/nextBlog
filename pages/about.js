import Nav from '@/components/Nav'
import Clipboard from 'react-clipboard.js';

import Button from '@/components/button'

export default function About(props) {

  return (
    <>
      <h1>About</h1>
      <Nav />
      <Button />
      <Clipboard data-clipboard-text="I'll be copied">
        copy to clipboard
      </Clipboard>
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
