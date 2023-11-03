import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavbarExample from '../components/NavbarExample'
import CustomCarousel from '../components/CustomCarousel'
import CardArea from '../components/CardArea'
import News from '../components/News'
import Slogan from '../components/Slogan'
import Footer from '../components/Footer'

import EntranceImage from "@/images/home-page-entrance-image.png";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-black flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      
    >
<NavbarExample />
<Image src={EntranceImage} alt="Entrance photo" style={{width:"100%",minHeight:"90vh",objectFit:"cover",position:"absolute",zIndex:0}} />
<CardArea/>

<CustomCarousel />
<News/>
<Slogan/>
<Footer/>
    </main>
  )
}
