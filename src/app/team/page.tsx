'use client';
import Tile from "../components/tile";

const Team = () => {
    return (
      <div className="flex flex-col space-y-8 items-center">
        <p></p>
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left">OUR TEAMS</h1>
      <Tile name="Systems" title="Julia" description="Systems runs the communications behind the satellite." members={["Madhav K.", "Aniket C."]}/>
      <Tile name="Space Mechanics" title="Julia" description="Systems runs the communications behind the satellite." members={["Madhav K.", "Aniket C."]}/>
      <Tile name="Electrical" title="Julia" description="Systems runs the communications behind the satellite." members={["Madhav K.", "Aniket C."]}/>
      <Tile name="Flight Ops" title="Julia" description="Systems runs the communications behind the satellite." members={["Madhav K.", "Aniket C.", "Madhav K.", "Aniket C.", "Madhav K.", "Aniket C.", "Madhav K.", "Aniket C.", "Madhav K."]}/>
      <p></p>
      <p className="text-white">Copyright 2023 - Project Horizon</p>
    <p></p>
    </div>
    )
  }
  
  export default Team