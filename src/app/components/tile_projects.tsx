import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


interface TileProps {
  name: string;
  description: string;
  id: string;
  long_desc: string;
  image: string;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  return isMobile;
}

function TileProject({ name, description, id, long_desc, image }: TileProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return (
    <div>
      <div className={`card ${isMobile ? 'card-compact' : 'card-side'} text-white bg-gradient-to-t from-black to-gray-950 shadow-xl ${isMobile ? 'max-w-screen-sm' : 'max-w-screen-md'}`} onClick={() => document.getElementById(id).showModal()}>
        <div className="card-body max-w-screen-sm">
          <h2 className="card-title text-red-600">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex flex-col space-y-2">
            <figure className="pl-4">
              <Image src={image} alt={name} width={500} height={isMobile ? 100 : 100} />
            </figure>
          </div>
          <p className="py-4">{long_desc}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TileProject
