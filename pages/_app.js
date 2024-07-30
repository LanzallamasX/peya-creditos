import Script from 'next/script'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { AppContext } from '../context/AppContext'
import getFirestoreApp from '../firebase/config'
import '../styles/globals.scss'

//import Script from 'next/script';

getFirestoreApp()

function MyApp({ Component, pageProps }) {
  
useEffect(() => {

  
  
  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GOOAN_GTMID  
  }

  TagManager.initialize(tagManagerArgs)

}, [])


 const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
 const gaId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
 const gtmPreview = 'env-1'

  return(
    <>
      <Script id='hotjar-analytics'>{`
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3052595,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}</Script>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmId}');
          gtag('set', {'gtm_preview':'${gtmPreview}'});
        `}
      </Script>

      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '182269302117788');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=182269302117788&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      

      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  )
}

export default MyApp