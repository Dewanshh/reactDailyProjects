import React from 'react'
import { useParams } from 'react-router-dom';
import { people } from '../../data/data';

function Cpage() {
    const {name}=useParams();
    console.log(name);
    const person=people.find(item=>item.name===name);
  return (
    <div className='h-screen bg-black flex items-center justify-center text-white'>
        <div className='border-2 border-white p-5 rounded-xl text-black bg-white'>
        <h2>{person.name}</h2>
      <p>Street: {person.street}</p>
      <p>City: {person.city}</p>
      <p>State: {person.state}</p>
      <p>Country: {person.country}</p>
      <p>Telephone: {person.telephone}</p>
      <p>Birthday: {person.birthday}</p>

        </div>
</div>
  )
}

export default Cpage