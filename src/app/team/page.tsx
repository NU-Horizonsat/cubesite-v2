'use client';
import Tile from "../../components/tile";

const Team = () => {
  return (
    <div className="flex flex-col space-y-8 items-center">
      {/* Section: Leads */}
      <h1 className="text-red-600 text-5xl text-left font-bold">OUR MANAGEMENT</h1>
      <Tile
        title="Program Lead"
        name="Aniket Chaudhry"
        description="Our program lead oversees the entire program, ensuring all students interested in building satellites can join us on our mission."
        imagesrc="/team/aniket.PNG"
      />

      <Tile
        title="Chief Engineer"
        name="Rachel Rakushkin"
        description="Our program lead oversees the entire program, ensuring all students interested in building satellites can join us on our mission."
        imagesrc="/team/rachel.jpg"
      />
      {/* <Tile
        title="Operations Lead"
        name="Aniket Chaudhry"
        description="Our operations lead manages project goals on a short-term scale and coordinates internally between specific teams."
        imagesrc="/team/aniket.PNG"
      /> */}
      
      <Tile
        title="Technical Coordinator"
        name="Madhav Kapa"
        description="Our technical coordinator ensures seamless systems integration across various projects."
        imagesrc="/team/madhav.jpg"
      />

      {/* Section: Team Leads */}
      <h1 className="text-red-600 text-5xl text-left font-bold">OUR TEAM LEADS</h1>
      <Tile
        title="Flight Software"
        name="Ganesh Danke"
        description="Our flight software team develops and maintains all software for in-orbit operations, including programming, complexity analysis, and control flow."
        imagesrc="/team/ganesh.jpg"
      />
      <Tile
        title="Electrical"
        name="Jacob Oshinsky"
        description="Our electrical team ensures power and data distribution throughout the satellite, focusing on power analysis, circuit design, and data bus management."
        imagesrc="/team/jacob.jpg"
      />
      <Tile
        title="Mechanical"
        name="Laura Teixeira"
        description="Our mechanical team designs and assembles the structural and mechanical elements of our satellites, ensuring reliability and strength."
        imagesrc="/team/laura.jpg"
      />
      {/* <Tile
        title="Mission Operations - Flight"
        name="Rajiv Iyer"
        description="Our flight operations team conducts orbital simulations, trajectory analysis, and calculates optimal orbital parameters for missions."
        imagesrc="/team/rajiv.jpg"
      /> */}
      <Tile
        title="Ground Software"
        name="Aniket Chaudhry"
        description="Our ground operations team monitors satellite health, tracks orbital changes, and maintains communications with deployed satellites."
        imagesrc="/team/aniket.PNG"
      />

      {/* Section: Media & External Affairs */}
      <h1 className="text-red-600 text-5xl text-left font-bold">MEDIA & EXTERNAL AFFAIRS</h1>
      <Tile
        title="Outreach Lead"
        name="Chloe Bright"
        description="Our program advisor provides strategic guidance and ensures alignment with our mission goals."
        imagesrc="/team/chloe.png"
      />
      <Tile
        title="Social Media Lead"
        name="Ryan Master"
        description="Our mechanical advisor supports the team with expertise in structural and mechanical design."
        imagesrc="/team/RyanMaster.png"
      />
      <Tile
        title="Website Lead"
        name="Anwita Chaudhry"
        description="Our technical advisor offers insights and solutions for advanced systems integration and technical challenges."
        imagesrc="/team/Anwita-2.jpg"
      />
       
      {/* Section: Advisors */}
      <h1 className="text-red-600 text-5xl text-left font-bold">OUR ADVISORS</h1>
      <Tile
        title="Program Advisor"
        name="Brian Hulbert"
        description="Our program advisor provides strategic guidance and ensures alignment with our mission goals."
        imagesrc="/team/brian.jpg"
      />
      <Tile
        title="Mechanical Advisor"
        name="Matt O'Rourke"
        description="Our mechanical advisor supports the team with expertise in structural and mechanical design."
        imagesrc="/team/matt.jpg"
      />
      <Tile
        title="Technical Advisor"
        name="John Kerr"
        description="Our technical advisor offers insights and solutions for advanced systems integration and technical challenges."
        imagesrc="/team/john.jpg"
      />

      {/* Footer */}
      <p className="text-white">Copyright 2023 - Project Horizon</p>
      <p></p>
    </div>
    
  );
};

export default Team;
