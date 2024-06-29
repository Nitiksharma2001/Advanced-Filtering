import users from '../../../../data/users.json'
// {
//   "id": 2,
//   "name": "Ervin Howell",
//   "username": "Antonette",
//   "email": "Shanna@melissa.tv",
//   "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//       }
//   },
//   "phone": "010-692-6593 x09125",
//   "website": "anastasia.net",
//   "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//   }
// }
interface UserType {
  name: string
  email: string
  phone: string
  id: number
}
const Profile = () => {
  const { id, name, email, phone }: UserType = users[1]
  console.log(users[1])
  return (
    <div>
      <div>
        <div className='avatar placeholder'>
          <div className='bg-neutral text-neutral-content w-24 rounded-full'>
            <span className='text-3xl'>{name[0]}</span>
          </div>
          <div>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <input
            type='text'
            placeholder={String(id)}
            className='input input-bordered w-full max-w-xs font-black'
            disabled
          />
        </div>
        <div>
          <input
            type='text'
            placeholder={name}
            className='input input-bordered w-full max-w-xs'
            disabled
          />
        </div>
        <div>
          <input
            type='text'
            placeholder={email}
            className='input input-bordered w-full max-w-xs'
            disabled
          />
        </div>
        <div>
          <input
            type='text'
            placeholder={phone}
            className='input input-bordered w-full max-w-xs font-black'
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
