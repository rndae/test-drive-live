import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-40% from-gray-900 to-pink-900">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </>
  );
}
