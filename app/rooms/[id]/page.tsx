import React from "react";
import styles from ".../page.module.css";

export default function RoomPage({
  params: { roomId },
}: {
  params: { roomId: string };
}) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        backgroundColor: "#eee",
        borderRadius: "8px",
        textDecoration: "none",
        color: "black",
        fontSize: "24px",
        fontWeight: "500",
        maxWidth: "200px",
      }}
    >
      {roomId}
    </div>
  );
}
