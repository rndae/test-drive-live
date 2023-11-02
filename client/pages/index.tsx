import Link from "next/link";
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-40% from-gray-900 to-pink-900">
      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        src="/video/tdl-preview.mp4"
        controls
        autoPlay
        muted      
      />
      <Link href="/info">
        <button
          className="mt-8 px-4 py-2 text-lg text-white bg-pink-700 rounded hover:bg-pink-600">
          Click for more information
        </button>
      </Link>
    </div>
  );
};

export default Home;
