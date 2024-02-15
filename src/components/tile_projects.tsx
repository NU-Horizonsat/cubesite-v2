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
  credits: string;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  return isMobile;
}

function TileProject({ name, description, id, long_desc, image, credits }: TileProps) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return (
    <div>
      {/* @ts-ignore */}
      <div className={`card ${isMobile ? 'card-compact' : 'card-side'} hover:text-gray hover:cursor-pointer text-white bg-gradient-to-t from-black to-gray-950 shadow-xl hover:to-black ${isMobile ? 'max-w-screen-sm' : 'max-w-screen-md'}`} onClick={() => document.getElementById(id)!.showModal()}>
        <div className="card-body max-w-screen-sm">
          <h2 className="card-title text-red-600 ">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <dialog id={id} className="modal modal-bottom sm:modal-middle text-white modal-backdrop">
        <div className="modal-box  bg-gradient-to-t from-black to-gray-950 w-2/3 max-w-6xl">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex flex-col space-y-2">
            <figure className="pl-4">
              <Image src={image} alt={name} width={500} height={isMobile ? 100 : 100} />
              {/* add caption */}
              <figcaption className="text-xs text-gray-500">{credits}</figcaption>
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
