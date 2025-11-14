import logo from '../assets/finta-logo-light.svg'
const NavBar = () => {
    const arr = [
          { href: '/guide', title: 'Guide' },
          { href: '/pricing', title: 'Pricing' },
          { href: '/login', title: 'Login' }
        ]
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 right-0 max-w-5xl mx-auto px-4 py-4 ">
        <div><img src={logo} height={70} width={70} alt="Finta logo" /></div>
        <div className='flex gap-6'>
            {arr.map((link) => (
          <div key={link.title}>
            <a href={link.href} className='text-neutral-800 font-medium hover:text-neutral-400 transition duration-200 '>{link.title}</a>
          </div>
        ))}
        <button className='bg-[#2679f3] rounded-md px-4 py-1 text-white shadow-xl text-shadow-md tracking-wide font-medium hover:bg-blue-800'>Get started</button>
        </div>
    </div>
  )
} 

export default NavBar