'use client';
import NoMemberTile from "../components/nomembertile";

const Partners = () => {
    return (
      <div className="flex flex-col space-y-8 items-center">
        <p></p>
        <p></p>
        <h1 className=" text-red-600 text-5xl text-left">OUR PARTNERS</h1>
      <NoMemberTile imagesrc="/nasa.png" name="" title="NASA" description="NASA CSLI is a program offers an opportunity for universities, high schools, and non-profit organizations in the United States to access space. They provide us cost-effective pathway for building, testing and launching THIS-SAT." />
      <NoMemberTile imagesrc="/unlab.webp" name="" title="UN Lab" description="The Ultrabroadband Nano-networking Laboratory is a graduate research lab on Northeastern’s campus. They conduct research into advanced communications technology and are building the payload (a Terahertz band transmitter and receiver) that will ultimately fly on THIS-SAT." />
      <NoMemberTile imagesrc="/ansys.webp"name="" title="Ansys" description="ANSYS has graciously provided Project Horizon with its Satellite ToolKit (STK) software which we use for orbital modeling, and determining communication times between our satellites and our ground station." />
      <NoMemberTile imagesrc="/aeronu.webp" name="" title="AerospaceNU" description="AerospaceNU is the parent club for Project Horizon. AeroNU provides extended administrative capacity to Project Horizon, and integrates the project into the university club system. AeroNU also provides all day-to-day operational funding for project horizon." />
      <NoMemberTile imagesrc="/nuwireless.webp" name="" title="NU Wireless" description="NU Wireless is a student run organization on Northeastern Campus that specializes in wireless radio communications, especially with handheld HAM radios. Together, Project Horizon and NU Wireless are building a ground station capable of direct communications with our satellite for data uplink and downlink capabilities." />
      <p></p>
      <p className="text-white">Copyright 2023 - Project Horizon</p>
    <p></p>
    </div>
    )
  }
  
  export default Partners