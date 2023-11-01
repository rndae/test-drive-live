import React, { MouseEvent } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
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
          className="mt-8 px-4 py-2 text-lg font-mono font-bold text-red-500 bg-gray-800 rounded hover:bg-gray-700">
          What is TDL?
        </button>
      </Link>
    </div>
  );
};

export default Home;
