import React from 'react'

function TailwindPractice() {
  return (
    <>
    <nav className='flex justify-between bg-black p-2 items-center'>
      <div className='text-white text-center'>Logo</div>
      <ul className='flex justify-around text-white gap-x-3'>
        <li><a href="" className='p-2 rounded-xl hover:bg-white hover:text-blue-700'>Home</a></li>
        <li><a href="" className='p-2 rounded-xl hover:bg-white hover:text-blue-700'>About</a></li>
        <li><a href="" className='p-2 rounded-xl hover:bg-white hover:text-blue-700'>Contact Us</a></li>
      </ul>
      <button className='text-white font-bold bg-blue-700 p-2 rounded-xl hover:cursor '>Login/SignUp</button>
    </nav>
    <header className='w-full h-auto'>
      <img className='w-full hidden md:block'src='https://images.unsplash.com/photo-1706274072971-0d4bfb4c62c7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Google Background' />
      <img className='w-full md:hidden'src='https://images.unsplash.com/photo-1706260239049-2686c8e30dfb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Google' />
    </header>
    <div className='h-auto w-100 flex flex-col items-center text-center p-10 bg-black'>
      <div className='w-full h-auto flex flex-wrap flex-col items-center'><p className='text-white font-bold text-2xl md:text-3xl'>"Pure Hardwork, No Shortcuts!!"</p><div className='w-48 h-1 border-b-4 border-blue-700 mt-2 rounded-xl'></div></div>
    </div>
    <div className='w-full flex flex-wrap justify-evenly bg-black '>
      <div className='w-46 flex flex-col items-center mb-12 rounded-[5px] p-4'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src={logo}/>
        <p className='text-white font-bold text-sm'>600+</p>
        <p className='text-white font-semibold text-xs'>Different Courses</p>
      </div>
      <div className='w-46 flex flex-col items-center mb-12 rounded-[5px] p-4'>
        <img className='h-40 w-40 bg-white rounded-full object-fit mb-2 pt-1'src='https://www.svgrepo.com/show/493407/woman-studying.svg'/>
        <p className='text-white font-bold text-sm'>7000+</p>
        <p className='text-white font-semibold text-xs'>Students Enrolled</p>
      </div>
      <div className='w-46 flex flex-col items-center mb-12 rounded-[5px] p-4'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src='https://www.svgrepo.com/show/530180/transaction-record.svg'/>
        <p className='text-white font-bold text-sm'>10000+</p>
        <p className='text-white font-semibold text-xs'>Succesfull Transactions</p>
      </div>
      
    </div>
    <div className='h-auto w-100 flex flex-col items-center text-center p-10 bg-black '>
      <div className='w-full h-auto flex flex-wrap flex-col items-center'><p className='text-white font-bold text-2xl md:text-3xl'>Our Products</p><div className='w-48 h-1 border-b-4 border-blue-700 mt-2 rounded-xl'></div></div>
      </div>
      <div className='flex w-full flex-wrap justify-center bg-black justify-evenly p-4 '>
      <div className='flex flex-col items-center text-white mt-2'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src='https://www.svgrepo.com/show/493407/woman-studying.svg' />
          <p className='font-bold text-xl'>Heading One</p>
          <p className='text-xs'>lorem ipsum dolar content</p>
    
      </div>
      <div className='flex flex-col items-center text-white mt-2'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src='https://www.svgrepo.com/show/493407/woman-studying.svg' />
          <p className='font-bold text-xl'>Heading One</p>
          <p className='text-xs'>lorem ipsum dolar content</p>
    
      </div>
      <div className='flex flex-col items-center text-white mt-2'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src='https://www.svgrepo.com/show/493407/woman-studying.svg' />
          <p className='font-bold text-xl'>Heading One</p>
          <p className='text-xs'>lorem ipsum dolar content</p>
    
      </div>
      <div className='flex flex-col items-center text-white mt-2'>
        <img className='h-40 w-40 bg-white rounded-full object-cover mb-2'src='https://www.svgrepo.com/show/493407/woman-studying.svg' />
          <p className='font-bold text-xl'>Heading One</p>
          <p className='text-xs'>lorem ipsum dolar content</p>
    
      </div>
    </div>
    </>
  )
}

export default TailwindPractice