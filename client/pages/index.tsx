import React, { MouseEvent } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Link href="/info">
        <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} /> 
      </Link>
      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        src="/video/tdl-preview.mp4"
        controls
        autoPlay
        loop
        muted      
      />
      <Link href="/info">
        <button
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
          What is TestDriveLive?
        </button>
      </Link>
    </div>
  );
};

export default Home;
