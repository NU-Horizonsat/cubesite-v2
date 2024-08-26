'use client';
import Hero from '../components/Hero'
import TileProject from '../components/tile_projects'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black from-30% via-black via-50% to-red to-90%">
      <div className="space-y-6">
        <Hero />
      </div>
      <div className="pt-20 pb-3 pl-20">
      </div>
       
      <div className="flex flex-col space-y-8 items-center">
      <h1 className=" text-white text-5xl text-left">Projects</h1>
        <TileProject
          name="TeraHertz In Space SATellite (THIS-SAT)"
          description="THIS-Sat is a satellite for testing terahertz-frequency low-earth orbit RF communication. It aims to be the first THz test platform to demonstrate and better understand this form of communication for uplink, downlink, and inter-satellite link in LEO."
          id="modal1"
          long_desc='Terahertz in Space Satellite is the current primary focus of Project Horizon. THIS-Sat launches as one 12U satellite and, upon initial communication with ground after orbital insertion, splits into two fully functional 6U satellites using a high-accuracy ultra-low-velocity splitting mechanism. Post-split, each 6U satellite will serve as one half of the first test platform for terahertz-frequency RF communication in low-earth orbit. THIS-Sat’s mission is to demonstrate and better understand the properties of high-throughput terahertz-frequency RF uplink, downlink, and inter-satellite link in the LEO environment. Developed by Northeastern’s Ultrabroadband Nanonetworking Laboratory, the terahertz RF payload launching on THIS-Sat has the potential to upend high-throughput orbital communication.'
          image='/projects/thissat.png'
          credits=''
          />
        <TileProject
          name="DevSat-1"
          description=" DevSat-1 is Project Horizon’s first in-house small satellite. It aims to provide flight heritage to novel technologies that Project Horizon hopes to utilize in future satellite launches."
          id='modal2'
          long_desc='Development Satellite-1 is Project Horizon’s first foray into space as a university small satellite program. DevSat-1 is a 1U satellite bus based on the PROVES satellite kit designed by Cal-Poly Pomona’s Bronco Space Program. The DevSat line of satellites will facilitate an internal pipeline of rapid satellite development and payload integration to test novel technologies that Project Horizon hopes to utilize for future launches. Accordingly, DevSat-1’s mission is to serve as a test platform for novel software and hardware that will facilitate the success of THIS-Sat’s mission specifically. Some things that will be tested on DevSat-1 include advanced compression algorithms and small-scale splitting mechanisms. '
          image='/projects/devsat.png'
          credits=''
        />
        <TileProject
          name="Merrit Coil Cubesat Attitude Test System (MCCATS)"
          description="MCCATS is an apparatus that will be used to simulate the magnetic field in low earth orbit. It will be used in testing and calibrating the attitude control system of our future satellites."
          id='modal3'
          long_desc="The Merritt Coil Cubesat Attitude Test System (MCCATS) is a apparatus that is build in-house by project members. It's main purpose is to generate a controllable magnetic field that will be used to test and calibrate magnetoquers and magnetometers for current and future satellites. Using this, it is possible to measure how well the satellite can orient itself in space and the exact torque that the magnetoquers can generate."
          image='/projects/merrit.png'
          credits='MAGLAB, Czech Technical University'
        />
        <p></p>
        <p></p>
        <p className="text-white">Copyright 2023 - Project Horizon</p>
        <p></p>
      </div>
      
    </main>
  )
}
