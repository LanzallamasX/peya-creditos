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
      <div className={styles.wrapVideoStory}>
        <div className={styles.videoStoryTopText}>
          <h2>Una historia real de crecimiento.</h2>
          <p>Conocé la historia de Juan, <br /> dueño en <i>Cata, tienda de calzone</i></p>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.wrapIframe}>
          <iframe src="https://www.youtube.com/embed/K_Ig2THVe3U?si=ndyAer66Z6TZsfKD"></iframe>    
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default videoStory;
