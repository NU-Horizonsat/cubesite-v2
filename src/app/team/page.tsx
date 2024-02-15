'use client';
import Tile from "../../components/tile";

const Team = () => {
    return (
      <div className="flex flex-col space-y-8 items-center">
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left font-bold">OUR LEADS</h1>
      <Tile title="Program Lead" name="Brian Hulbert" description="Our program lead is in charge of our overall program, ensuring that all students interested in building satellites can join us on our mission. " imagesrc="/team/brian.jpg"/>
      <Tile title="Operations Lead" name="Angelika Bouley" description="Our operations lead oversees project goals on a more immediate time scale and facilitates internal coordination between specific projects." imagesrc="/team/angelika.jpg"/>
      <Tile title="Technical Coordinator" name="John Kerr" description="Our technical coordinator facilitates higher level systems-side integration within each specific project." imagesrc="/team/john.jpg"/>
      <Tile title="Webmaster" name="Madhav Kapa" description="Our webmaster is responsible for designing and updating this website and maintaining our project’s internal wiki page." imagesrc="/team/madhav.jpg"/>
      <p></p>
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left font-bold">OUR TEAM LEADS</h1>
      <Tile title="Avionics" name="Julia Keadey" description="Our avionics team handles all of the software and mathematical calculations responsible for in-orbit operations. Programming, complexity analysis, and control flow are among tasks that avionics is responsible for." imagesrc="/team/julia.jpg"/>
      <Tile title="Space Mechanics" name="Matt O'Rourke" description="Our mechanical team develops and assembles the structural and mechanical elements of our satellites." imagesrc="/team/matt.jpg"/>
      <Tile title="Electrical" name="Jack Hester" description="Our electrical team is responsible for how power and data is distributed throughout the satellite. Power analysis, circuit design, and data bus design are all handled by electrical." imagesrc="/team/jack.jpg"/>
      <Tile title="Flight Ops" name="Ryan Boyd" description="Our flight operations team conducts orbital simulations, trajectory analysis, and calculates optimal orbital parameters for our missions." imagesrc="/team/ryan.jpg"/>
      <p></p>
      <p className="text-white">Copyright 2023 - Project Horizon</p>
    <p></p>
    </div>
    )
  }
  
  export default Team