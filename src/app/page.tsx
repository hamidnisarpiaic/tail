import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center bg-slate-400 m-10 p-3">
    <div className="w-2/3 text-center">
        <h1 className="text-white text-2xl tracking-widest mx-auto">Hamid Nisar</h1>
       <h2 className="text-white">Web Developer</h2>
       <button className="border border-double rounded p-2 m-5 bg-blue-800 text-white hover:bg-red-900">Learn More</button>
    </div>
    
    <div className="border-4 rounded-full border-white">
    <Image src="/h.png" alt="Hamid Logo" width={120} height={120} className="rounded-full p-3" />
    <div className="flex text-white justify-center p-0 font-serif">Hamid Nisar</div>
    </div>

    </div>
        <div>
      <ul className="flex flex-col md:flex-row space-x-4 justify-center h-35 bg-slate-600 items-center text-white">
      <li> Home </li>
      <li> Contact </li>
      <li> About </li>



      </ul>


        </div>
   
    </>
  )
}
