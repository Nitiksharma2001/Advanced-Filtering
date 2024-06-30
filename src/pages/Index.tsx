import Navbar from './main/Navbar'

// progress bar for table has to be added
// profile page not yet made
// url based pagination not done

const Index = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main className='py-2 h-[90%]'>{children}</main>
    </>
  )
}

export default Index
