import Navbar from './main/Navbar'

const Index = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main className='py-2 h-[90%]'>{children}</main>
    </>
  )
}

export default Index
