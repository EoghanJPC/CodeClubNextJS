import Link from "next/link";


export default function NavBar () {
    return(
        <header className="container mx-auto my-2 rounded-xl">
            <nav className="py-3 sm:float-right md:bg-transparent md:opacity-100 md:z-0 md:w-1/2 lg:w-1/3 xl:w-1/4 opacity-0 sm:z-5 sm:my-0 sm:static absolute">
                <Link href="/"><button className="border-solid border-2 px-3 rounded-md bg-white border-opacity-30 border-black italic hover:bg-pink-100 hover:text-pink-800 duration-500 ">Home</button> </Link>
                <Link href="/scratch"><button className="border-solid border-2 px-3 rounded-md bg-white border-opacity-30 border-black italic hover:bg-orange-100 hover:text-orange-800 duration-500 ">Scratch</button> </Link>
                <Link href="/python"><button className="border-solid border-2 px-3 rounded-md bg-white border-opacity-30 border-black italic hover:bg-blue-100 hover:text-blue-800 duration-500 ">Python</button> </Link>
                <Link href="/web"><button className="border-solid border-2 px-3 rounded-md bg-white border-opacity-30 border-black italic hover:bg-green-100 hover:text-green-800 duration-500 ">Web</button> </Link>
            </nav>
        </header>
    )
}

