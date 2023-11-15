import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center bg-teal-700 m-2 p-0">
        <div className="w-2/3 text-center">
          <h1 className="text-white text-4xl font-bold tracking-widest mb-2">Hamid Nisar</h1>
          <h2 className="text-white text-lg">Web Developer</h2>
          <button className="border border-double rounded p-2 mt-5 bg-teal-800 text-white hover:bg-black">
          <Link href="/learn_more">Learn More</Link>
           </button>
       
        </div>

        <div className="border-4 rounded-full border-white flex flex-col items-center ml-5">
          <Image src="/h.png" alt="Hamid Logo" width={150} height={150} className="rounded-full p-3" />
          <div className="text-white mt-2 mb-5 font-weight: 100 ">Hamid Nisar</div>
        </div>
      </div>

      <div>
        <ul className="flex flex-col md:flex-row space-x-4 justify-center h-35 bg-teal-900 items-center text-white">
        <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
      <div>

    <h1 className="text-2xl text-teal-800"> This is About Page</h1>

     </div>
    <body className="bg-teal-200">
     
     </body>
    </>
  );
}
