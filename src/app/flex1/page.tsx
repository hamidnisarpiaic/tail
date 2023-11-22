import Link from 'next/link';
import Image from 'next/image';

export default function Flex1() {
  return (
    <>
    {/* <div className='flex flex-col m-4 p-6'>

    <div className='flex max-w-6xl bg-gray-400 rounded-xl m-4 even:flex-row-reverse even:text-left p-4'>
    <div> 
    <Image src="/img1.png" alt="image4" width={400} height={400} className="w-48 h-48 object-center rounded-lg mr-4 p-4" /> 
    </div>
    <div className='p-4 m-4 text-white'>
        <h1 className='p-2 text-2xl'>Mr. Amanullah Mughal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam voluptate quod itaque eos ex dolorem voluptatum delectus labore beatae, laudantium officiis unde earum quo! Veniam, amet. Quo, vero inventore totam eius illo molestias! </p>
    </div>
    </div>





    <div className='flex max-w-6xl bg-gray-400 rounded-xl m-4 even:flex-row-reverse even:text-left'>
    <div> 
    <Image src="/h.png" alt="image4" width={400} height={400} className="w-48 h-48 object-center rounded-lg mr-4 p-4" /> 
    </div>
    <div className='p-4 m-4 text-white'>
        <h1 className='p-2 text-2xl'> Mr. Hamid Nisar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam voluptate quod itaque eos ex dolorem voluptatum delectus labore beatae, laudantium officiis unde earum quo! Veniam, amet. Quo, vero inventore totam eius illo molestias! </p>
    </div>
    </div>















    <div className='flex max-w-6xl bg-gray-400 rounded-xl m-4'>
    <div> 
    <Image src="/img2.png" alt="image4" width={400} height={400} className="w-48 h-48 object-center rounded-lg mr-4 p-4" /> 
    </div>
    <div className='p-4 m-4 text-white'>
        <h1 className='p-2 text-2xl'>Sonam Kapoor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam voluptate quod itaque eos ex dolorem voluptatum delectus labore beatae, laudantium officiis unde earum quo! Veniam, amet. Quo, vero inventore totam eius illo molestias! </p>
    </div>
    </div>







    <div className='flex max-w-6xl bg-gray-400 rounded-xl m-4 even:flex-row-reverse even:text-left'>
    <div> 
    <Image src="/img6.png" alt="image4" width={400} height={400} className="w-48 h-48 object-cover rounded-lg mr-4 p-4" /> 
    </div>
    <div className='p-4 m-4 text-white'>
        <h1 className='p-2 text-2xl'> Mr. Shahi Soom</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam voluptate quod itaque eos ex dolorem voluptatum delectus labore beatae, laudantium officiis unde earum quo! Veniam, amet. Quo, vero inventore totam eius illo molestias! </p>
    </div>
    </div>










































    </div>
 */}
<div className='flex justify-center bg-teal-300 max-w-6xl mx-auto'>
  <input type='email' placeholder="Enter your email" className="placeholder-shown rounded-1-lg w-auto max-w-none flex-grow m-5 p-4"
  />
  <button className="flex-grow bg-teal-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-r-lg">
    Subscribe
  </button>
</div>
<div className='flex flex-col w-96 mx-auto p-5 bg-slate-200 m-3'>
  <h2 className='font-bold text-xl text-center'>Welcome to Class2</h2>
  <p className='flex-grow text-sm m-3 text-justify'>
    Lorem ipsum dolor,  laborum, cupiditate commodi, qui architecto iste voluptatibus nostrum delectus aperiam, quas culpa minus quo accusantium. Reprehenderit sit nostrum labore fugiat voluptatem alias in expedita.
  </p>
  <button className='bg-teal-900 text-white p-2 mx-auto'>Read more</button>
</div>

<div className='mt-10 flex justify-around flex-row m-2 p-2'>
  <button className='flex-grow-[1] bg-teal-500 text-white font-bold py-2 px-4 rounded w-auto max-w-none m-2'>1</button>
  <button className='flex-grow-[2] bg-teal-500 text-white font-bold py-2 px-4 rounded w-auto max-w-none m-2'>2</button>
  <button className='flex-grow-[3] bg-teal-500 text-white font-bold py-2 px-4 rounded w-auto max-w-none m-2'>3</button>
</div>

<div className=' bg-blue-500 max-w-5xl mx-auto p-2 m-4 rounded-xl'>
<ul className='flex justify-between m-2 px-4'>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-700 hover:border-teal-900'>Home</li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-700 hover:border-teal-900'>About</li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-700 hover:border-teal-900'>Contact</li>
<li className='px-4 py-2 rounded-xl hover:flex-grow-[1] border-b-2 transition-all duration-700 hover:border-teal-900' >Services</li>

</ul>











</div>





    </>
  );
}
