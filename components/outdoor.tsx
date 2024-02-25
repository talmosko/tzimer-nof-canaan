import Link from "next/link";
import Image from "next/image";
import styles from "./outdoor.module.css";

type outdoorId = keyof typeof outdoorIds; // Type for the keys of roomIds
type OutdoorDetails = {
  imageSrc: string;
  pageTitle: string;
  description: string;
};
const outdoorIds = {
  OUTDOOR_POOL: "Outdoor Pool",
  PUBLIC_POOL: "Public Pool",
  NATURE: "Nature",
} as const;

const outdoors: Record<outdoorId, OutdoorDetails> = {
  OUTDOOR_POOL: {
    imageSrc: "/IMG-20240209-WA0091.jpg",
    pageTitle: "Outdoor Pool",
    description: "Outdoor Pool",
  },
  PUBLIC_POOL: {
    imageSrc: "/8920326.jpg",
    pageTitle: "Public Pool",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  NATURE: {
    imageSrc: "/tamarPool1.jpg",
    pageTitle: "Nature",
    description: "Nature Around",
  },
};

export default function Outdoor() {
  return (
    <>
      <h2 className={styles.mainHeading}>Outdoor Activities</h2>
      <div className={styles.outdoorContainer}>
        {Object.entries(outdoorIds).map(([key, outdoorId]) => (
          <Link
            className={styles.card}
            key={key as string}
            href={`/outdoors/${outdoorId}`}
            passHref
          >
            <Image
              src={outdoors[key as keyof typeof outdoors].imageSrc}
              height={300}
              width={350}
              alt={`${outdoorId} outdoor `}
              className={styles.roomImage}
            />
            <div className={styles.roomId}>{outdoorId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
