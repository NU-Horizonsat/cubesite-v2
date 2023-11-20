import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface TileProps {
  name: string;
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

function TileProject({ name, description, imagesrc }: TileProps) {
  const isMobile = useIsMobile();

  return (
    <div className={`card ${isMobile ? 'card-compact' : 'card-side'} text-white bg-gradient-to-t from-black to-gray-950 shadow-xl ${isMobile ? 'max-w-screen-sm' : 'max-w-screen-md'}`}>
      <figure className="pl-4">
        <Image src={imagesrc} alt={name} width={isMobile ? 100 : 800} height={isMobile ? 100 : 500} />
      </figure>
      <div className="card-body max-w-screen-sm">
        <h2 className="card-title text-red-600">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TileProject
