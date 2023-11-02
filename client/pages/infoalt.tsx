import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";


const CircleLayout: React.FC = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const totalItems = items.length;
  const rotationConstant = 360 / totalItems;

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="relative">
        {items.map((item, index) => {
          const rotation = rotationConstant * index;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${rotation}deg) translate(200px) rotate(-${rotation}deg)` }}
            >
              <div className="bg-gray-200 p-4 rounded-full text-center">
                {item}
              </div>
            </div>
          );
        })}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center mt-8">
                <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} />
                <input
                    type="text"
                    placeholder="Code"
                    className="bg-gray-700 text-white rounded p-2 mr-4"
                />
                <Link href="/contract">
                    <button className="px-4 py-2 text-lg font-mono font-bold text-pink-700 bg-gray-800 rounded hover:bg-gray-700">
                    Enter
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLayout;
