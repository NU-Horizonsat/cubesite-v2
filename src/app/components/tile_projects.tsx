import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface TileProps {
  name: string;
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

function TileProject({ name, description}: TileProps) {
  const isMobile = useIsMobile();

  return (
    <div className={`card ${isMobile ? 'card-compact' : 'card-side'} text-white bg-gradient-to-t from-black to-gray-950 shadow-xl ${isMobile ? 'max-w-screen-sm' : 'max-w-screen-md'}`}>
      <div className="card-body max-w-screen-sm">
        <h2 className="card-title text-red-600">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TileProject
