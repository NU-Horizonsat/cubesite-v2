'use client';
import Tile from "../components/tile";

const Team = () => {
    return (
      <div className="flex flex-col space-y-8 items-center">
        <p></p>
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left font-bold">OUR TEAMS</h1>
      <Tile title="Systems" name="Julia" description="Systems runs the communications behind the satellite." imagesrc="/nasa.png"/>
      <Tile title="Space Mechanics" name="Julia" description="Systems runs the communications behind the satellite." imagesrc="/nasa.png"/>
      <Tile title="Electrical" name="Julia" description="Systems runs the communications behind the satellite." imagesrc="/nasa.png"/>
      <Tile title="Flight Ops" name="Julia" description="Systems runs the communications behind the satellite." imagesrc="/nasa.png"/>
      <p></p>
      <p className="text-white">Copyright 2023 - Project Horizon</p>
    <p></p>
    </div>
    )
  }
  
  export default Team