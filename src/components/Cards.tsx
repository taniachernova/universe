"use client";

import React from "react";
import Head from "next/head";

interface CardDetail {
  title: string;
  buttonText: string;
  phone_number: string;
  card_image: string;
}

const Cards: React.FC = () => {
  const cardDetail: CardDetail[] = [
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp1.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp2.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp3.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp4.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp5.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp6.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp7.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp8.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp9.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp10.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp11.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp12.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp13.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp14.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp15.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905532299588",
      card_image: "/wp16.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905533488911",
      card_image: "/wp17.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+93748991624",
      card_image: "/wp18.jpg",
    },
  ];

  const handleWhatsAppRedirect = (phone_number: string) => {
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };

  const handleImageClick = (phone_number: string) => {
    handleWhatsAppRedirect(phone_number);
  };

  return (
    <div className="flex flex-wrap">
      <Head>
        <title>Cards</title>
        <meta name="cards" content="all" />
      </Head>

      {cardDetail.map((detail, index) => (
        <div key={index} className="w-1/2 md:w-1/4 p-1 flex">
          <a
            href="#"
            onClick={() => handleWhatsAppRedirect(detail.phone_number)}
          >
            <div className="w-full overflow-hidden">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={detail.card_image}
                alt=""
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
