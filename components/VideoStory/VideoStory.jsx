import styles from "./VideoStory.module.scss";

const videoStory = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section id="videoStorySection" className={styles.videoStoryContainer}>
      <div className="container">
          <div className={styles.wrapVideoStory}>
            <div className={styles.videoStoryTopText}>
              <h2>Una historia real <b>de crecimiento.</b></h2>
              <p>Conocé la historia de Juan, <br /> dueño en <i>Cata, tienda de calzone</i></p>
            </div>

            <div className="h-[40vh] md:h-[30vh] lg:h-[30vh] xl:h-[40vh] sm:w-[90vw] w-[90vw] md:w-[50vw] lg:w-[40vw] xl:w-[40vw]   relative overflow-hidden mt-4">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/K_Ig2THVe3U`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
                className="absolute left-0 top-0 h-full w-full"
              />
            </div>


          </div>
      </div>
     
    </section>
  );
};

export default videoStory;
