import Link from "next/link";
import Image from "next/image";
import styles from "./roomCard.module.css";

type RoomId = keyof typeof roomIds; // Type for the keys of roomIds
type RoomDetails = {
  imageSrc: string;
  pageTitle: string;
  description: string;
};
const roomIds = {
  SUITE_ROOM: "Suite",
  PANORAMIC_ROOM: "Panoramic",
  WESTERN_ROOM: "Western",
} as const;

const rooms: Record<RoomId, RoomDetails> = {
  SUITE_ROOM: {
    imageSrc: "/suiteLivingRoom.jpg",
    pageTitle: "Suite Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  PANORAMIC_ROOM: {
    imageSrc: "/panoramicRoomView.jpg",
    pageTitle: "Panoramic Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
  WESTERN_ROOM: {
    imageSrc: "/panoramicBalcony.jpg",
    pageTitle: "Western Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
};

export default function RoomCard() {
  return (
    <>
      <h2 className={styles.mainHeading}>The Rooms</h2>
      <div className={styles.roomsContain}>
        {Object.entries(roomIds).map(([key, roomId]) => (
          <Link
            className={styles.card}
            key={key as string}
            href={`/rooms/${roomId}`}
            passHref
          >
            <Image
              src={rooms[key as keyof typeof rooms].imageSrc}
              height={300}
              width={350}
              alt={`${roomId} room `}
              className={styles.roomImage}
            />
            <div className={styles.roomId}>{roomId}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
