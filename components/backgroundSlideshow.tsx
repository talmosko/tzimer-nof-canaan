"use client";
import { useEffect, useState } from "react";
import styles from "../app/layout.module.css";
import Image from "next/image";
import nofCanaanLogoTransparent from "/public/temp.svg";

const imagePaths = [
  "/backg.jpg",
  "/background.jpg",
  "/panoramicRoomView.jpg",
  // Add more images as needed
];

export default function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${imagePaths[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
        className={styles.header}
      >
        {/* menu as component */}
        <button className={styles.menuButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          MENU
        </button>
        {/* mainLogo as component */}
        <div className={styles.logoContainer}>
          <Image
            src={nofCanaanLogoTransparent}
            alt="Nof Canaan Logo"
            width={150}
            height={150}
          />
        </div>
        <button className={styles.menuButton}>RESERVE NOW</button>
      </header>
    </>
  );
}
