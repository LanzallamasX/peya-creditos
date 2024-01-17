import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// Registra los plugins al importarlos
gsap.registerPlugin(ScrollTrigger);


const ScrollTest = ( wrapContainer, paneles, ctxPar, dataElem ) => {
  
  wrapContainer = useRef();

  useEffect(() => {

    paneles = gsap.utils.toArray(dataElem);
    ctxPar = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapContainer.current,
        start: "top",
        end: "max",
        pin: true,
        smooth: 5,
        scrub: true,
        markers: false,
      },
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;
      tl.fromTo(panel, {
        yPercent: 150, duration: i * 0.3, ease: "none"
      }, {yPercent: 0});

    });      


    }, wrapContainer); 
    
    ScrollTrigger.refresh();

    return () => ctxPar.revert(); 

  }, []);

  return (    
    <div>
      
    </div>  
  );
};

export default ScrollTest;