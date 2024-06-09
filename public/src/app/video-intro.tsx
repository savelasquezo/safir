"use client";

import React from "react";


export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-10 max-w-6xl ">
        <div className="z-10 absolute w-full h-full inset-0 rounded-xl" />
        <video className="h-full w-full rounded-lg" controls muted>
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
}

export default VideoIntro;