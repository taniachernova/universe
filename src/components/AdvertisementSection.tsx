import React from "react";
import Head from "next/head";

const AdvertisementSection = () => {
  return (
    <div className="relative mt-10">
      <Head>
        <title>Advertisement</title>
        <meta
          name="advertisement"
          title="Advertisement"
          content="noImageIndex"
        />
      </Head>
      <img
        src="/black.png"
        alt="Hero"
        className="w-full h-20 object-fill lg:h-10vh xl:h-10vh lg:w-70vw xl:w-70vw"
      />
      <div className="absolute h-20 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="lg:text-4xl md:text-xl sm:text-xl font-bold">
            İstanbul Escort, İstanbul Eskort, Escort İstanbul, Eskort İstanbul
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
