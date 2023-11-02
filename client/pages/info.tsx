import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-40% from-gray-900 to-pink-900">
      <div className="flex flex-wrap justify-around w-full max-w-4xl">
        <div className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
            <details>
                <summary className="text-gray-100 font-bold hover:text-fuchsia-200 cursor-pointer">
                What is TestDriveLive?
                </summary>
                {" "}
                <span className="text-pink-300 hover:text-pink-600">TestDriveLive </span>
                is our 24/7 Livestream Shopping Channel or (LSS), also known as live
                eCommerce, live shopping, and live selling, where the customer can make
                purchases in real-time, while a video and host, reviewing products, is
                streaming live.
            </details>
        </div>
        <div className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
            <details>
                <summary className="text-gray-100 font-bold hover:text-fuchsia-200 cursor-pointer">
                Expand Your Selling Reach
                </summary> {" "}
                <span className="text-pink-300 hover:text-pink-600">TestDriveLive </span>
                provides social proof to potential customers that marketing materials
                like a website or advertisements can't provide. The reactions are
                authentic and show someone's actual experience with the product. While
                those marketing materials are important, social proof is convincing and
                communicates a customer's experience with the item.
            </details>
        </div>

        <div className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
            <details>
                <summary className="text-gray-100 font-bold hover:text-fuchsia-200 cursor-pointer">
                Tell your product's story
                </summary>
                Unleash your brand's potential with Orlando's finest product review studio. Distinctively crafted by industry experts and influencers, our videos ensure your brand eclipses competitors. Experience the magic of professional touch and unparalleled quality, all under one roof. Nestled in the heart of Orlando, we pride ourselves on utilizing top-tier equipment and techniques, ensuring every product review is cinematic and compelling. Trust our seasoned producers to spotlight your product, amplifying its unique features and benefits, guaranteeing a lasting impression on your audience.
            </details>
            </div>
            <div className="text-gray-200 p-4 border-2 border-gray-700 rounded-lg m-4">
            <details>
                <summary className="text-gray-100 font-bold hover:text-fuchsia-200 cursor-pointer">
                What are you waiting for?
                </summary>
                Dive into a realm where superior quality meets strategic presentation, and watch your conversions soar. Don't let your brand be just another name in the crowd—let us elevate you to where you truly belong.
            </details>
            </div>



        <div className="grid grid-cols-2 gap-20 m-8">
            <div>
                <div className="items-center">
                    <span className="text-gray-300 mr-4">To submit your product for review to be part of Test Drive Live, click here to go to the submission page</span>
                </div>
                <Link href="/request-code">
                <button className="px-4 py-2 mt-4 text-lg font-mono font-bold text-pink-700 bg-gray-800 rounded hover:bg-gray-700">
                    Submit
                </button>
                </Link>
            </div>
        <div>
                <span className="text-gray-200">If you have a client code, type it here:</span>
                <div className="flex items-center">
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
   
    </div>
    
  );
};

export default Info;
