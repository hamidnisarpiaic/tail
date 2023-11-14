import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center bg-slate-400 m-10 p-3">
    <div className="w-2/3 text-center">
        <h1 className="text-white text-2xl tracking-widest mx-auto"> Welcome to Panaverse</h1>
       <h2 className="text-white"> Nice to see you</h2>
       <button className="border border-double rounded p-2 m-5 bg-blue-800 text-white hover:bg-red-900"> Click Me</button>
    </div>
    
    <div>
    <Image src="/h.png" alt="Hamid Logo" width={150} height={150} className="rounded-full p-3" />
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
