import Link from "next/link";
import styles from "./index.module.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
//import axios from "axios";
import { countries, zones } from 'moment-timezone/data/meta/latest.json';

export const metadata = {
  title: "Experiencias PedidosYa",
  description: "Experiencias PedidosYa",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "Pagos, PedidosYa Pagos, PedidosYa, Visa, Visa Crédito, Crédito, pedidosya, pedidos, rápido, compra, tarjeta, visa, crédito, débito, beneficios, compras, descuentos, gana, premio, concurso, chances, supermercados, restaurantes, mercados, farmacias, tiendas, helados, mascotas, despegar, viajes, viajar, viaje, tour, new york, nueva york, manhattan, hamburguesa, burga, burger",
};

const Home = () => {
  const landings = ['AR', 'CL', 'DO', 'EC', 'PE'];
  const [state, setState] = useState({
    countryName: "",
    countryCode: ""
  });

  const router = useRouter();
  
  // Llamado a API -> Eficaz pero sólo se puede usar gratis 1.000 veces por día
  /*const getGeoInfo = () => {
    axios('https://ipapi.co/json/')
    .then(res => {
      const { data } = res;
      
  
      console.log('country  ', `/${data.country.toLowerCase()}/`)
  
      if (data.country && countries.includes(data.country.toLowerCase())) {
        if (state.country === 'do') {
          //redirect('/rd/');
          router.push('/rd');
        } else {
          //redirect(`/${data.country.toLowerCase()}/`);
          router.push('/ar');
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };*/

  // Usando Moment
  const getGeoInfo = () => {
    const timeZoneToCountry = {};

    Object.keys(zones).forEach(z => {
      const cityArr = z.split('/');
      const city = cityArr[cityArr.length-1];
      timeZoneToCountry[city] = countries[zones[z].countries[0]];
    });

    let userCity, userCountry, userTimeZone;
    if (Intl) {
      userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const tzArr = userTimeZone.split('/');
      userCity = tzArr[tzArr.length-1];
      userCountry = timeZoneToCountry[userCity];
    } else {
      console.log('No Intl')
    }

    if (userCountry && landings.includes(userCountry.abbr)) {
      if(userCountry.abbr === 'DO') {
        router.push('/rd');
      } else {
        router.push(`/${userCountry.abbr.toLowerCase()}`);
      }
    }
  }

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <section className="min-h-screen grid grid-rows-main-page font-texta">
      <div className="flex justify-center items-center gap-4 p-4 h-min bg-peya-blue text-black">
        <img
          src="/images/hero/pedidosYaCreditos.png"
          className="w-60 lg:w-60 lg:hidden" 
          alt=""
        />
        <img
          src="/images/hero/pedidosYaCreditos.png"
          className="w-30 lg:w-60 hidden lg:block"
          alt=""
        />
        
      </div>
      <div className="px-peya-x py-8">
        <div className="flex flex-col lg:flex-row justify-evenly px-peya-x py-8 text-2xl items-center flex-wrap text-black font-texta-bold bg-peya-white h-full lg:gap-12">          
          <Link
            href={"/ar/"}
            className="w-fit mx-auto flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span className="fi fi-ar h-6 rounded-peya text-4xl"></span>
            <div className={styles.fontSite}>Argentina</div>
          </Link>
          <Link
            href={"/cl/"}
            className="w-fit mx-auto flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span className="fi fi-cl h-6 rounded-peya text-4xl"></span>
            <div className={styles.fontSite}>Chile</div>
          </Link>
          <Link
            href={"/pe/"}
            className="w-fit mx-auto flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span className="fi fi-pe h-6 rounded-peya text-4xl"></span>
            <div className={styles.fontSite}>Perú</div>
          </Link>
          <Link
            href={"/ec/"}
            className="w-fit mx-auto flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span className="fi fi-ec h-6 rounded-peya text-4xl"></span>
            <div className={styles.fontSite}>Ecuador</div>
          </Link>  
          <Link
            href={"/rd/"}
            className="w-fit mx-auto flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span className="fi fi-do h-6 rounded-peya text-4xl"></span>
            <div className={styles.fontSite}>República Dominicana</div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-4 lg:px-peya-x h-fit bg-peya-blue py-8">
      </div>
    </section>
  );
}

export default Home;