import React, { useState } from 'react'

function ValentinesPage() {
const phrases=[
    "Accept karlo plzz!","No???!","Are you Sure?", 
    "Really Sure?",
    "Pookie Please",
    "Don't do this to me!",
    "I'm gonna cry",
    "You're breaking my heart"
];
const [yesPressed,setYes]=useState(false);
const [counter,setCounter]=useState(0);
const fontSize=counter*5+16;
function getNoButtonText(){
  return phrases[Math.min(counter,phrases.length-1)];
}
function getBackgroundColor() {
  const shade = 100 -counter; // Decrease the shade with each click
  return `rgba(255, 0, 0, ${shade / 100})`; // Adjust the RGBA color accordingly
}
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-pink-200'>

        <h1 className='mb-4 font-bold shadow-xl p-4 text-center bg-pink-300 rounded-xl text-white' style={{ backgroundColor: counter===0?'rgba(223, 178, 209)':getBackgroundColor() }}>{getNoButtonText()} </h1>
      
        {yesPressed?(<>
        <img className='h-[400px] w-[400px] rounded-full bg-white shadow-xl ' alt='yes' src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'/>

        </>):(<><img className='h-[400px] w-[400px] rounded-full shadow-xl object-fit' alt='no' src='https://media1.tenor.com/m/Y-1mhjlV-j4AAAAC/milk-and-mocha-hugs.gif'/></>)}
        <div className='flex justify-around m-3'><button className={`bg-pink-500 px-4 py-2 rounded-xl mr-2 text-white font-bold rounded-xl`} style={{ fontSize: `${fontSize}px` }} onClick={()=>setYes(true)}>Yes</button>
        <button className='bg-red-500 px-4 py-2 rounded-xl mr-2 text-white font-bold text-[16px] h-12 w-12' onClick={()=>{setCounter(counter+1);}}>No</button></div></div>

  )
}

export default ValentinesPage