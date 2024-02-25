import Image from "next/image";
import styles from "./room.module.css";
export default function Room() {
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
    </>
  );
}
