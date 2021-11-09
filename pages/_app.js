import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }


    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return <>
    <Head>
      <meta name='renderer' content='webkit' />
      <title>title</title>
      <meta name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
    </Head>
       <Component {...pageProps} />
  </>

}

export default MyApp
