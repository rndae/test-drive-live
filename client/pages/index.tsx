import React, { MouseEvent } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-70% from-gray-900 to-pink-600">
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
          className="mt-8 px-4 py-2 text-lg text-white bg-gradient-to-br from-70% from-gray-900 to-pink-700 rounded hover:from-gray-800 from-70% hover:to-pink-900">
          What is TDL?
        </button>
      </Link>
    </div>
  );
};

export default Home;
