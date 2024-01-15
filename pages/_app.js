import Script from 'next/script'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { AppContext } from '../context/AppContext'
import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'


getFirestoreApp()

function MyApp({ Component, pageProps }) {
  
useEffect(() => {
  
  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID
  }

  TagManager.initialize(tagManagerArgs)

}, [])


  return(
    <>
      <Script id='hotjar-analytics'>{``}</Script>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  )
}

export default MyApp