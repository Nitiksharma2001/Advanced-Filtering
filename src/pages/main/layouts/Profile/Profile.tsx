import { Link } from 'react-router-dom'
import users from '../../../../data/users.json'
import { FaArrowLeft } from 'react-icons/fa'
interface UserType {
  name: string
  email: string
  phone: string
  id: number
  address: {
    street: string
    suite: string
    city: string
  }
}
const Profile = () => {
  const { id, name, email, phone, address }: UserType = users[1]
  return (
    <div className='mx-60 p-4 flex flex-col gap-4 h-full'>
      <p className='flex items-center gap-4'>
        <Link to='/'>
          <FaArrowLeft />
        </Link>
        Welcome, {name}
      </p>
      <section className='border-4 border-slate-100 p-8 h-full flex flex-col gap-4 '>
        <section className='flex items-center gap-2'>
          <div className='avatar placeholder'>
            <div className='bg-neutral text-neutral-content w-24 rounded-full'>
              <span className='text-3xl'>{name[0]}</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-2xl'>{name}</p>
            <p className='text-gray-400'>{email}</p>
          </div>
        </section>
        <section className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <div className='flex flex-col gap-2'>
            <label>Post ID</label>
            <input
              type='text'
              placeholder={String(id)}
              className='input input-bordered w-full font-black'
              disabled
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Name</label>
            <input
              type='text'
              placeholder={name}
              className='input input-bordered w-full font-black'
              disabled
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              type='text'
              placeholder={email}
              className='input input-bordered w-full font-black'
              disabled
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Address</label>
            <input
              type='text'
              placeholder={`${address.suite} ${address.street} ${address.city}`}
              className='input input-bordered w-full font-black'
              disabled
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Phone</label>
            <input
              type='text'
              placeholder={phone}
              className='input input-bordered w-full font-black'
              disabled
            />
          </div>
        </section>
      </section>
    </div>
  )
}

export default Profile
