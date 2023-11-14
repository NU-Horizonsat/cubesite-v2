import Image from 'next/image'
import Hero from './components/Hero'
import Devsat from './components/devsatdesktopcard'
import Cubesat from './components/cubesatdesktopcard'

export default function Home() {
  return (
    <main>
      <Hero />
      <Cubesat />
      <Devsat />
      <p>Home</p>
    </main>
  )
}
