import Image from 'next/image'
import logo from '../public/code_club_logo.jpg'
import scratch from '../public/scratch.png'
import python from '../public/python.png'
import web from '../public/web.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container bg-pink-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-pink-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
          <Image src={logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>

          <header className="container bg-pink-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-pink-800">
            <h1 className="text-xl font-bold text-pink-950">Learn how to code with Code Club</h1>
            <p className="m-4 text-lg">Our Projects have step-by-step instructions to teach you how to create games, animations and much more. Choose from hundreds of options in up to 30 languages.</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={scratch} alt="Scratch" />       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Scratch</h2>              

              <p className="m-2">Create animations, apps and interactive stories by adding code, costumes and sounds.</p><br />

              <div className="flex my-1 justify-center m-auto">
                <Link href="/scratch"><button className="items-center mb-1 border-solid border-2 px-3 rounded-md border-orange-800 bg-orange-100">Explore Scratch Projects</button></Link>
              </div>      
            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={python} alt="python" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">Python</h2>
                  <p className="m-2">Make digital art, games and more, while exploring one of the world's most popular programming languages.</p><br />

              <div className="flex justify-center m-auto">
                <Link href="/python"><button className="border-solid border-2 px-3 rounded-md border-blue-800 bg-blue-50">Explore Python Projects</button></Link>
               </div>

            </section>

            <section className="p-4 bg-green-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-green-800">
              <Image src={web} alt="web" />
                <h2 className="font-bold text-green-800 text-xl pt-2">Web Design</h2>
                  <p className="m-2">Build websites and apps by learning HTML, CSS and JavaScript</p><br />

              <div className="flex justify-center m-auto">
                <Link href="/web"><button className="border-solid border-2 px-3 rounded-md content-center border-green-800 bg-green-50 ">Explore Web Projects</button></Link>
              </div>

            </section>

          </div>
        </article>
      </main>

      <footer className="align-bottom italic">
        Dublin Road, Dundalk
      </footer>
    </div>
  )
}
