import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Devsat() {
  return (
    <div className="card w-96 text-white bg-black shadow-xl ">
        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Ncube2.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                DevSat
            </h2>
            <p>Launching this box in 2024=6!</p>
        </div>
    </div>
  );
}

export default Devsat