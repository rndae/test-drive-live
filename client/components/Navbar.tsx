import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  
  // close menu on route change
  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // clean up event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between w-full h-32 px-4 pt-4 text-gray-200 bg-transparent z-10 shadow-lg"> 
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex-shrink-0"> 
          <Link href="/" className="text-4xl font-bold ">
            <Image src="/logo/_TD_LOGO_FOR_WEB.png" alt="Logo" width={200} height={200} className="object-contain" /> 
          </Link>
        </div>
        <div className="relative md:hidden"> 
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-fuchsia-500 hover:border-fuchsia-500"> 
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V15z"/>
            </svg>
          </button>
          <div className={`absolute right-0 mt-2 origin-top-right rounded-md shadow-lg ${isOpen ? "" : "hidden"}`}> 
            <ul className="font-medium flex flex-col p-4 rounded-lg bg-gray-800 border-gray-700 max-w-screen-xl">
              <li className="mx-4 my-2 md:my-0"> 
                <Link href="/info">
                  <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/info' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
                    Info
                  </div>
                </Link>
              </li>
              <li className="mx-4 my-2 md:my-0"> 
                <Link href="/request-code">
                  <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/request-code' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
                    Contact
                  </div>
                </Link>
              </li>
              <li className="mx-4 my-2 md:my-0"> 
                <Link href="/contract">
                  <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/contract' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
                    Contract
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:justify-end md:pr-4"> 
            <li className="mx-4 my-2 md:my-0"> 
              <Link href="/info">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/info' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
                  Info
                </div>
              </Link>
            </li>
            <li className="mx-4 my-2 md:my-0"> 
              <Link href="/request-code">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/request-code' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
                  Contact
                </div>
              </Link>
            </li>
            <li className="mx-4 my-2 md:my-0"> 
              <Link href="/contract">
                <div className={`hover:text-fuchsia-500 hover:underline ${router.pathname === '/contract' ? 'text-fuchsia-500' : 'text-gray-200'}`}>
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
