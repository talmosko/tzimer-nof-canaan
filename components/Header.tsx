"use client";
import { useEffect, useState } from "react";
// import styles from "../app/layout.module.css";
import styles from "./header.module.css";
import Image from "next/image";
import Head from "next/head";

import nofCanaanLogoTransparent from "/public/temp.svg";

const imagePaths = [
  "/backg.jpg",
  "/background.jpg",
  "/panoramicRoomView.jpg",
  // Add more images as needed
];

export default function Header() {
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
        className={styles.header}
        style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}
      >
        <div className={styles.headline}>
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
        </div>
        <main className={styles.main}>
          <div className={styles.mainTitle}>
            <h1 className={styles.mainHeading}>
              Unwind in Luxury: Discover Our Exquisite Hotel and Resort
            </h1>
            <button className={styles.getStarted}>
              GET STARTED <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className={styles.coordinate}>3.2028° N, 73.2207° E</div>
        </main>
      </header>
    </>
  );
}
