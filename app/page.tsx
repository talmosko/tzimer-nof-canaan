import Image from "next/image";
import styles from "./page.module.css";
import nofCanaanLogoTransparent from "/public/temp.svg";
import Room from "@/components/room";
import Link from "next/link";
import RoomCard from "@/components/roomCard";
import Outdoor from "@/components/outdoor";
import Video from "@/components/video";

export default function Home() {
  return (
    <>
      <div className={styles.all}>
        <RoomCard />
        <Outdoor />
        <Video />
      </div>
    </>
  );
}
