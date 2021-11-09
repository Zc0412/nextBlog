// import {useRouter} from 'next/router'

export default function NewsId(context) {
  console.log(context)
  // 1&&2
  /*const router = useRouter()
    const {isFallback} = router

    const {post: {results}} = props;
    console.log(results);
    const info = results.map((d, i) => <h1 key={i}>{d.nat}</h1>)

    // isFallback 回退？
    if (isFallback) {
        return <div>loading.....</div>
    }
    return <div>{info}</div>;*/

  // 3.
  return <div>getServerSideProps</div>
}

// 1.
/*export async function getStaticPaths() {
    const res = await fetch(`https://randomuser.me/api`);
    const data = await res.json();
    console.log(data);
    return {
        paths: [{params: {id: "1.3"}}],
        fallback: false,
    };
}*/
// 2.
/*export async function getStaticProps({params}) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://randomuser.me/api/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return {props: {post}}
}*/

// 3.
export async function getServerSideProps(context) {
  const data = undefined

  if (!data) {
    return {
      // 可以重定向
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  /*if (!data){
        return {
            // 可以返回404
            notFound:true
        }
    }*/
  return {
    props: { data: '123' },
  }
}
