import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full h-24 px-4 pt-4 text-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="">
          <Link href="/" className="text-4xl font-bold ">
            <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} /> 
          </Link>
        </div>
        <div className="h-8 mr-3">
          <ul className="flex">
            <li className="mx-4">
              <Link href="/info">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/info' ? 'text-fuchsia-500' : 'text-gray-500'}`}>
                  Info
                </div>
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/request-code">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/request-code' ? 'text-fuchsia-500' : 'text-gray-500'}`}>
                  Contact
                </div>
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/contract">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/contract' ? 'text-fuchsia-500' : 'text-gray-500'}`}>
                  Contract
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
