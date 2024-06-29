import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 flex justify-between w-full z-100 border-b-black-200 border-b-2 h-[10%]'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          Swift
        </Link>
      </div>
      <div className='flex-none'>
        <Link to='/profile' tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
          <div className='w-10 rounded-full'>
            <img
              alt='Tailwind CSS Navbar component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
