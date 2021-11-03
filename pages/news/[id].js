export default function NewsId(props) {
  console.log(props);
  const {post:{results}} = props;
  console.log(results);
  const info = results.map((d,i)=><h1 key={i}>{d.nat}</h1>)
  return <div>{info}</div>;
}

export async function getStaticPaths() {
  const res = await fetch(`https://randomuser.me/api`);
  const data = await res.json();
  console.log(data);
  return {
    paths: [{ params: {id:"1.3"} }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://randomuser.me/api/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
