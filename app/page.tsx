import Image from "next/image";
import styles from "./page.module.css";
import nofCanaanLogoTransparent from "/public/temp.svg";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.roomsContainer}>
        <div className={styles.description}>
          <h1 className={styles.main_title}>
            Designed by the most creative minds in profession, built by the
            finest people in the industry, and we have finally begun our journey
            to serve you.
          </h1>
          <p className={styles.subtitle}>ROYAL EXPERIENCE</p>
        </div>
        <div className={styles.roomsCardsContainer}>
          {/* Suite */}
          <div className={styles.roomCard}>
            <Image
              src="/suiteLivingRoom.jpg"
              alt="Suite"
              width={150}
              height={150}
            />
            <h2>The Suite</h2>
            <p>
              An 89m heated infinity pool with breathtaking views over the
              valley.
            </p>
            <button className={styles.view_more_btn}>VIEW MORE</button>
          </div>
          {/* panoramic room 1 */}
          <div className={styles.roomCard}>
            <Image
              src="/panoramicRoomView.jpg"
              alt="panoramic room 1"
              width={150}
              height={150}
            />
            <h2>Panoramic Room</h2>
            <p>
              An 89m heated infinity pool with breathtaking views over the
              valley.
            </p>
            <button className={styles.view_more_btn}>VIEW MORE</button>
          </div>

          {/* panoramic room 2 */}
          <div className={styles.roomCard}>
            <Image
              src="/panoramicBalcony.jpg"
              alt="panoramic room 2"
              width={150}
              height={150}
            />
            <h2>Western Room</h2>
            <p>
              An 89m heated infinity pool with breathtaking views over the
              valley.
            </p>
            <button className={styles.view_more_btn}>VIEW MORE</button>
          </div>
        </div>
      </div>

      {/* outdoor activities */}
      <div className={styles.outdoorContainer}>
        <div className={styles.outdoorActivity}>
          <Image
            src="/IMG-20240209-WA0091.jpg"
            alt="outdoorPool"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.outdoorActivity}>
          <Image
            src="/8920326.jpg"
            alt="public pool"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.outdoorActivity}>
          <Image src="/tamarPool1.jpg" alt="spring" width={150} height={150} />
        </div>
      </div>

      {/* youtube video */}
      <div className={styles.videoSection}>
        <h2>Our Featured Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ylvQ-CRlozg?si=mdSQdOckvBj538Tc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
