import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* ... (commented-out code) */}

      {/* Main Div */}
      <div className='flex justify-evenly bg-gray-300 p-2'>
        <div className="text-center text-black">
          <Image src="/img6.png" alt="image1" width={300} height={300} className="w-32 h-32 object-top rounded-full" />
          <h3 className="font-bold text-center">Johan Daud</h3>
          <p className="font-thin"> Web Developer</p>
        </div>

        <div className="text-center text-black">
          <Image src="/image1.jpg" alt="image2" width={300} height={300} className="w-32 h-32 object-top rounded-full" />
          <h3 className="font-semibold">Sami Dum</h3>
          <p className="font-thin"> Full Stack Developer</p>
        </div>

        <div className="text-center text-black">
          <Image src="/img7.jpg" alt="image3" width={300} height={300} className="w-32 h-32 object-top rounded-full" />
          <h3 className="font-semibold text-center">Sohni Sing</h3>
          <p className="font-thin">Front-End Developer</p>
        </div>

        <div > 
          <Image src="/img1.png" alt="image4" width={300} height={300} className="w-32 h-32 object-top rounded-full" />
          <h3 className="text-center text-black"> Walton Don</h3>
          <p className="font-thin"> Typescript Expert</p>
        </div>
      </div>

      <div className="justify-center items-center bg-gradient-to-t from-indigo-900 to-amber-300 p-2 w-32 h-32 rounded-full m-4">
    <div className="bg-white w-full h-full rounded full">
        <Image src={'/h.png'} alt='image' width={300} height={300} className='w-32 h-32 rounded-full object-cover' />
        </div>
     </div>

    





    </>
  );
}
