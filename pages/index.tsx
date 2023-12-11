import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CardArea from '../components/CardArea'
import News from '../components/News'
import Slogan from '../components/Slogan'
import Footer from '../components/Footer'
import Slider1 from "@/images/Slides/slider1.png";
import Slider2 from "@/images/Slides/slider2.png";
import Slider3 from "@/images/Slides/slider3.png";
import EntranceImage from "@/images/home-page-entrance-image.png";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {

  const slides = [
    { 
      title: "Lorem ipsum dolor sit amet,",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: Slider1 
    },
    { 
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
      image: Slider2 
    },
    { 
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: Slider3 
    }
  ];

  const cards= [
    {
      title: "Yazılım Eğitimleri",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: Slider1,
    },
    {
      title: "Sektör Tanıtımları",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: Slider2,
    },
    {
      title: "Etkinlik Takvimi",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: Slider3,
    }
  ];

  return (
    <main
      className={`bg-black flex min-h-screen flex-col items-center justify-between ${roboto.className}`}
    >
<Navbar />
<div  style={{width:"100%",height:"60vh",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className='text-4xl font-bold text-white text-center bg-[#000d] rounded-lg p-10 m-2 shadow'  style={{zIndex:2,maxWidth:800}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
<Image src={EntranceImage} alt="Entrance photo" style={{objectFit:"cover",position:"absolute",}}  fill/>
</div>

<CardArea cards={cards}/>
<Slider 
  slides={slides}
/>
<News/>
<Slogan/>
<Footer/>
    </main>
  )
}
