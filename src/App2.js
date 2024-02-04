
import './index.css';

function App() {
  return (
    <>
      <section className='flex flex-col p-4 align-center items-center bg-red-300 '>
        <div className='bg-white flex md:flex-row flex-col rounded-xl translate-y-2 overflow-hidden'>
          <div>
          <img className="h-40 md:w-[300px] object-cover w-full "src='https://images.unsplash.com/photo-1706449512330-efd9ed50990a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>
        <div className='bg-white md:w-[300px] p-2 flex flex-col justify-start items-start'>
          <h1>Dewansh Jangir</h1>
          <p> Software Developer</p>
          <p>Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. </p>
        </div>
        </div>
    </section>
    <section>
      <div className='flex flex-col items-center justify-center'>
      <ul class="divide-y divide-gray-100">
        <li className='border-[1px] p-4 gap-x-6 rounded-xl'>
          <div className='flex min-w-0 gap-x-6'>
          <img className="h-12 w-12 flex-none object-cover bg-gray-50 rounded-full "src='https://images.unsplash.com/photo-1706449512330-efd9ed50990a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <div><p className='text-sm font-semibold leading-6 text-gray-900'>John Doe</p><p className='mt-1 truncate text-xs leading-5 text-gray-500'>de@gmail.com</p></div>

          <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-600'>Co-Founder / CEO</p>
            <p className='mt-1 text-xs leading-5 text-gray-500'>Last Seen 3h Ago</p>
            </div>
          </div>
        </li>
        <li className='border-[1px] p-4 gap-x-6 rounded-xl'>
          <div className='flex min-w-0 gap-x-6'>
          <img className="h-12 w-12 flex-none object-cover bg-gray-50 rounded-full "src='https://images.unsplash.com/photo-1706449512330-efd9ed50990a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <div><p className='text-sm font-semibold leading-6 text-gray-900'>John Doe</p><p className='mt-1 truncate text-xs leading-5 text-gray-500'>de@gmail.com</p></div>

          <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-600'>Co-Founder / CEO</p>
            <p className='mt-1 text-xs leading-5 text-gray-500'><span className='text-green-600 font-bold align-center text-xs'>.Online </span></p>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </section>
    </>
  );
}

export default App;
