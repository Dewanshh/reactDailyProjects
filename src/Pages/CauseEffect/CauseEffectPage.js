import React from 'react'
import {useNavigate} from 'react-router-dom'
import { people } from '../../data/data';

function CauseEffectPage() {
    const navigate=useNavigate();
  return (
    <div className='h-min-[300px] flex flex-wrap flex-col overflow-y-auto p-4 items-center justify-center bg-teal'>
        {
        people.map(items=>{
               return <div className='p-4 m-2 border-2 shadow-xl text-black hover:cursor-pointer min-w-[300px]' onClick={()=>{navigate(`/causeEffectApp/${items.name}`)}}>
                <h1>{items.name}</h1>
                <h2>{items.street}</h2>
               </div>;
            })
        }

    </div>
  )
}

export default CauseEffectPage