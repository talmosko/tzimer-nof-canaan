"use client";
import { useEffect, useState } from "react";

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
    <div
      style={{
        backgroundImage: `url(${imagePaths[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    />
  );
}
