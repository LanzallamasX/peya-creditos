import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Layout from "../components/Layout/Layout";
import styles from "./index.module.scss";
import VideoStory from "../components/VideoStory/VideoStory";
import Benefits from "../components/Benefits/Benefits";
import CarouselSwiper from "../components/CarouselSwiper/CarouselSwiper";
import Requirements from "../components/Requirements/Requirements";
import CreditRequest from "../components/CreditRequest/CreditRequest";
import PaymentSteps from "../components/PaymentSteps/PaymentSteps";
import Testimonials from "../components/Testimonials/Testimonials";
import Faqs from "../components/Faqs/Faqs";
import Hero from "../components/Hero/Hero";
import PopUp from "../components/PopUp/PopUp";
import PopUpTyC from "../components/PopUpTyC/PopUpTyC";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh();

const Cl = ({ heroDataFromDB, promoDataFromDB }) => {
  const lng = 'CL';
  const [showPopUp, setShowPopUp] = useState(false);
  const [showTyCPopUp, setShowTyCPopUp] = useState(false);
  const [termsAndConditionsForModal, setTermsAndConditionsForModal] =
    useState("");

  const openModal = () => {
    setShowPopUp((current) => !current);
  };

  const openTyCModal = () => {
    setShowTyCPopUp((current) => !current);
  };

  const getTyCForModal = (data) => {
    // console.log(data);
    setTermsAndConditionsForModal(data);
    openTyCModal();
  };

  useEffect(() => {
    !localStorage.getItem("userData") &
      localStorage.setItem("userData", "null");
    let height = document.getElementById("nav").offsetHeight;
    document.documentElement.style.setProperty("--top-navbar", height + "px");
  }, []);

  return (
    <Layout  >
      <main className={styles.mainContainer}>
        <Hero
          imagesArray={heroDataFromDB}          
          tyc={getTyCForModal}
        />
        <VideoStory
          lng={lng}
          name={'Miguel'}
          place={'Del Country Sushi'}
          video={'https://www.youtube.com/embed/7CU8hp6SEYk'}
        />
        <Benefits lng={lng} />
        <CarouselSwiper lng={lng} />
        <Requirements />
        <CreditRequest lng={lng} /> 
        <PaymentSteps lng={lng} />
        <Testimonials />      
        <Faqs />

      </main>
      <AnimatePresence>
        {showPopUp ? <PopUp  /> : null}
      </AnimatePresence>
      <AnimatePresence>
        {showTyCPopUp ? (
          <PopUpTyC fn={openTyCModal} data={termsAndConditionsForModal} />
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};

export const getStaticProps = async () => {
  try {
    const db = getFirestore();

    const queryCollectionHero = await query(
      collection(db, "hero"),
      orderBy("sort")
    );

    const heroDataFromDB = [];

    await getDocs(queryCollectionHero).then((res) =>
      res.docs.map((item) =>
        heroDataFromDB.push({ ...item.data(), id: item.id })
      )
    );

    const queryCollectionPromos = await query(
      collection(db, "promos"),
      orderBy("sort")
    );

    const promoDataFromDB = [];

    await getDocs(queryCollectionPromos).then((res) =>
      res.docs.map((item) =>
        promoDataFromDB.push({ ...item.data(), id: item.id })
      )
    );

    return {
      props: {
        heroDataFromDB,
        promoDataFromDB,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
  }
};

export default Cl;
