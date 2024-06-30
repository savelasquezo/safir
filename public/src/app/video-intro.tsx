"use client";

import React, { useEffect, useState, Suspense } from 'react';


export function VideoIntro() {
  const [adminMedia, setAdminMedia] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const video = localStorage.getItem("set_video");
      if (video) setAdminMedia(JSON.parse(video));
    }
  }, []);

  return (
    <div className="p-8">
      <Suspense fallback={null}>
        {adminMedia && (
        <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-10 max-w-6xl ">
          <video className="h-full w-full rounded-lg" controls muted>
            <source src={`${adminMedia}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}
      </Suspense>
    </div>
  );
}

export default VideoIntro;
