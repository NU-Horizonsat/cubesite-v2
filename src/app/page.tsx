import Image from 'next/image'
import Hero from './components/Hero'
import Devsat from './components/devsatdesktopcard'
import Cubesat from './components/cubesatdesktopcard'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <Hero />
        <Cubesat />
        <Devsat />
      </div>
      <p>Home</p>
    </main>
  )
}
