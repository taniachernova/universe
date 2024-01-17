import React, { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "İstanbul Escort",
};

const Layout = ({ children }: LayoutProps) => {
  const canonicalUrl = "https://www.universeescort.com/";
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="robot" content="noImageIndex" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
