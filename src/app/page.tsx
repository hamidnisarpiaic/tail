import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-b from-teal-500 to-teal-900 m-2 p-0 hover:flex-grow-[2] transition-all duration-500">
        <div className="w-2/3 text-center">
          <h1 className="text-white text-4xl font-bold tracking-widest m-4">Hamid Nisar</h1>
          <h2 className="text-white text-lg mt-2"> Full Stack Developer Web 3.0</h2>
          
          <div className='font-sm pt-2 rounded-full ml-1 hover:flex-grow-[2] border-b-2 transition-all duration-800 hover:border-teal-900  text-[0.8rem] font-serif bg-white text-center mt-2'>
            <p> "Exemplify professionalism: Uphold principles, execute tasks methodically, and meet deadlines impeccably – commence with purpose, conclude with achievement."..</p>
            </div>
         
          <button className="border border-double rounded p-2 m-3 bg-teal-800 text-white hover:bg-black">
          <Link href="/learn_more">Learn More</Link>
           </button>
       
        </div>
       
        <div className="border border-double rounded-full bg-teal-800 hover:bg-black flex flex-col items-center ml-5">
          <Image src="/h.png" alt="Hamid Logo" width={150} height={150} className="rounded-full p-3 " />
          <div className="text-white mt-2 mb-5 font-weight: 100">Hamid Nisar</div>
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
      
      
    <div className='flex flex-cols-3 m-1 p-1 bg-teal-800 hover:bg-teal-400 justify-evenly mx-auto'>
        
    
    <div className=' border border-double rounded-1xl bg-teal-800 hover:bg-gray-300 m-4 p-4'>
    <> <Image src="/h1.png" alt="Hamid Logo" width={1200} height={1600} className="hover:flex-grow-0 transition-1 duhover:flex-grow-[1] border-2 transition-all duration-500 hover:border-black m-auto"/></>
    </div>
    
    <div className='bg-white text-black m-4 p-4'>
    <h3 className='text-1xl font-bold text-center'>Introduction </h3>
    <p className='mt-3 text-justify text-[0.8rem]'>
    Hi, I am Mr. Hamid, a seasoned Full Stack Web 3.0 Developer boasting a comprehensive skill set that encompasses HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, Bootstrap, and more. With a distinguished track record spanning over 5 years, I specialize in both front-end and back-end web development.
    </p>
    </div>

    <div className='bg-white text-black m-4 p-4'>
    <h3 className='text-1xl font-bold text-center'>Collaborate with Excellence </h3>
    <p className='mt-4 text-justify  text-[0.8rem]'>
    I am poised to explore new opportunities and forge collaborations with entities seeking a dedicated and proficient Full Stack Web 3.0 Developer. If you are in search of a professional with a proven track record, I invite you to connect with me and explore how I can contribute to the success of your projects.

Thank you for visiting my portfolio. I eagerly anticipate the prospect of collaborating with you to bring your web development aspirations to fruition.
   
   
   
    </p>
    </div>




    </div>




    



    <body className="bg-teal-200">
     
     </body>
    </>
  );
}
