import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface TileProps {
  name: string;
  title: string;
  imagesrc: string;
  description: string;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  return isMobile;
}

function Tile({ name, title, description, imagesrc }: TileProps) {
  const isMobile = useIsMobile();

  return (
    <div className={`card flex ${isMobile ? 'card-compact' : 'card-side'} text-white bg-gradient-to-r from-black to-gray-950 shadow-xl ${isMobile ? 'max-w-screen-sm' : 'max-w-screen-md'}`}>
      <figure className="pl-4 basis-1/4">
        <Image src={imagesrc} className="rounded-full" alt={name} width={'500'} height={100} />
      </figure>
      <div className="card-body basis-3/4">
        <h3 className="card-title text-red-600">{title}</h3>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Tile;
