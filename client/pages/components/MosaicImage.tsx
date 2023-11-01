import Image from "next/image";
import "tailwindcss/tailwind.css";

type Props = {
  src: string;
  alt: string;
};

const MosaicImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        />
    </div>
  );
};

export default MosaicImage;
