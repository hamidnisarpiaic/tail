import Image from 'next/image';
import Link from 'next/link';
export default function Learn_More() {
  return (
    <>
      <div className="flex justify-center items-center bg-teal-700 m-2 p-0">
        <div className="w-2/3 text-center">
          <h1 className="text-white text-4xl font-bold tracking-widest mb-2">Hamid Nisar</h1>
          <h2 className="text-white text-lg">Web Developer</h2>
          <button className="border border-double rounded p-2 mt-5 bg-teal-800 hover:bg-black">
          <Link href="/learn_more">Learn More</Link>
           </button>
        </div>

        <div className="border-4 rounded-full border-white flex flex-col items-center ml-5">
          <Image src="/h.png" alt="Hamid Logo" width={150} height={150} className="rounded-full p-3" />
          <div className="text-white mt-2 mb-5 font-weight: 100 ">Hamid Nisar</div>
        </div>
      </div>

      <div>
      <ul className='flex justify-between m-2 px-4 bg-stale-400 hover:bg stroke-teal-700'>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-500 hover:border-teal-900'><Link href="/">Home</Link></li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-500 hover:border-teal-900'><Link href="/about">About</Link></li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-500 hover:border-teal-900'><Link href="/contact">Contact</Link></li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-500 hover:border-teal-900' >Services</li>

</ul>
      </div>

      {/* <div>
        <ul className="flex flex-col md:flex-row space-x-3 justify-center h-25 bg-teal-900 items-center text-white">
        <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
       */}
      
      
      <div className='flex flex-cols-3 m-1 p-1 bg-teal-800 hover:bg-teal-400 justify-evenly'>
        
    
        <div className='border border-double rounded-1xl bg-teal-800 hover:bg-gray-300 m-4 p-4'>
        <> <Image src="/h1.png" alt="Hamid Logo" width={1200} height={1600} className='hclassName="hover:flex-grow-1 transition-all duration-500"over:flex-grow-[1] transition-all duration-500'/></>
        </div>
        
        <div className='bg-white text-black m-4 p-4'>
        <h3 className='text-2xl font-bold text-justify text-mono m-2'>Commitment to Growth </h3>
        <p className='mt-4 text-justify text-mono'>
        My commitment to excellence is exemplified by a continuous pursuit of knowledge. I diligently keep abreast of industry advancements through a blend of hands-on experience and a commitment to ongoing professional development. This dedication ensures that my skill set remains at the forefront of the rapidly evolving web development landscape.
        </p>
        </div>
    
        <div className='bg-white text-black m-4 p-4'>
        <h3 className='text-2xl font-bold text-center text-mono mt-4'>Professional Experience </h3>
        <p className='font-mono text-justify m-2'>
        My journey in web development commenced with a robust foundation in HTML and CSS, and over the years, I have evolved into a dynamic developer capable of translating intricate designs into seamless user interfaces. Leveraging JavaScript and TypeScript, I excel in crafting interactive and engaging web applications that elevate user experiences.

I leverage modern frameworks such as Next.js to deliver performant and scalable solutions, ensuring the seamless integration of cutting-edge technologies.
       
       
        </p>
        </div>
    
    
    
    
        </div>
    
    
    
    
        
    
    
    

<body className="bg-teal-300">




     
     </body>

    
      
    </>
  );
}
