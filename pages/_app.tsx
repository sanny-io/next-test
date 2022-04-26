import type { AppProps as Props } from 'next/app'

import Head from 'next/head'
import Footer from '../components/Footer'
import MainLayout from '../components/MainLayout'

export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title></title>
        {/* <base href="/" target="_blank"></base> */}
        <meta name="description" content="" />
        <meta name="theme-color" content="" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      <Footer />
    </>
  )
}