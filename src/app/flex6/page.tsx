import React from 'react';

const Flex6 = () => {
  return (
    <div className='container w-full h-screen flex flex-col md:flex-row bg-red-500'>
      <div className='split flex-grow bg-dark-200'>
        {/* Content for the first split */}
      </div>
      <div className='split flex-grow bg-yellow-400'>
        {/* Content for the second split */}
      </div>
    </div>
  );
};

export default Flex6;

// <div className='bg-teal-100 rounded-2xl flex items-start p-5 m-12'>
//     <div>
//     <h1 className='text-3xl font-bold'> Welcome to Pakistan </h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi voluptatem nesciunt repudiandae earum nulla minima fugiat this is incorrect.</p>
//     </div>
//     <span className='bg-red-700 flex-shrink-0 p-2 rounded-full text-white'> 10.00 A.M.</span>
//     </div>
{/* <div className='bg-slate-300 h-screen w-screen flex p-24'>

  <div className='first-div bg-yellow-500 rounded-l-lg w-3/2'>
    <h1 className='text-5xl font-bold'> Learn </h1>
  </div>


<div className='2nd-div bg-green-500 rounded-r-lg w-1/3'>
  <h1 className='text-5xl font-bold'> Teach </h1>

</div>

// </div> */}



// )
// }

// export default Flex6
