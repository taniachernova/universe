import AdvertisementSection from "@/components/AdvertisementSection";
import Cards from "@/components/Cards";
import React from "react";
import Head from "next/head";

const Page = () => {
  return (
    <div className="grid gap-4">
      <Head>
        <title>Pages</title>
        <meta name="pages" content="noImageIndex" />
      </Head>
      <AdvertisementSection />
      <Cards />
    </div>
  );
};

export default Page;
