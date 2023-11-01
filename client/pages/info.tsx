import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} />
      <div className="flex flex-wrap justify-around w-full max-w-4xl">
        <span className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
          <h1 className="text-red-400 hover:text-red-600">What is TestDriveLive?{" "}</h1>
          <span className="text-gray-400 hover:text-gray-600">
            TestDriveLive
          </span>{" "}
          is our 24/7 Livestream Shopping Channel or (LSS), also known as live
          eCommerce, live shopping, and live selling, where the customer can make
          purchases in real-time, while a video and host, reviewing products, is
          streaming live.
        </span>
        <span className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
          <h1 className="text-red-400 hover:text-red-600">Expand Your Selling Reach{" "}</h1>
          <span className="text-gray-400 hover:text-gray-600">
            TestDriveLive
          </span>{" "}
          provides social proof to potential customers that marketing materials
          like a website or advertisements can’t provide. The reactions are
          authentic and show someone’s actual experience with the product. While
          those marketing materials are important, social proof is convincing and
          communicates a customer’s experience with the item.
        </span>
        <span className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
          <h1 className="text-red-400 hover:text-red-600">Tell your product's story</h1> Unleash your brand’s potential with Orlando’s
          finest product review studio. Distinctively crafted by industry experts
          and influencers, our videos ensure your brand eclipses competitors.
          Experience the magic of professional touch and unparalleled quality, all
          under one roof. Nestled in the heart of Orlando, we pride ourselves on
          utilizing top-tier equipment and techniques, ensuring every product
          review is cinematic and compelling. Trust our seasoned producers to
          spotlight your product, amplifying its unique features and benefits,
          guaranteeing a lasting impression on your audience.
        </span>
        <span className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
          <h1 className="text-red-400 hover:text-red-600">What are you waiting for?</h1>Dive into a realm where superior quality meets
          strategic presentation, and watch your conversions soar. Don’t let your
          brand be just another name in the crowd—let us elevate you to where you
          truly belong.
        </span>
      </div>
      <div className="flex items-center mt-8">
        <input
            type="text"
            placeholder="Code"
            className="bg-gray-700 text-white rounded p-2 mr-4"
        />
        <Link href="/contract">
            <button className="px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700">
            Enter
            </button>
        </Link>
        </div>
        <div className="flex items-center mt-8">
        <span className="text-gray-300 mr-4">Don't have a code?</span>
        <Link href="/request-code">
            <button className="px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700">
            Request a Code
            </button>
        </Link>
        </div>

    </div>
    
  );
};

export default Home;
