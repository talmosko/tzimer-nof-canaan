import React from "react";

const roomIds = {
  PANORAMIC_ROOM: "panoramic",
} as const;

const rooms = {
  [roomIds.PANORAMIC_ROOM]: {
    imageSrc: "",
    pageTitle: "Panoramic Room",
    description:
      "An 89m heated infinity pool with breathtaking views over the valley.",
  },
};

function page() {
  return <div>page</div>;
}

export default page;
