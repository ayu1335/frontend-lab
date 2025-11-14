import pic from '../assets/hero-ui-v5.webp'
const Hero = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center text-center gap-4 mt-24 ">
        <div className=" bg-slate-100 rounded-full px-4 boarder-neutral-200 mb-8">We're hiring Founding Ruby Engineers</div>
        <div className="flex flex-col font-stretch-semi-expanded font-medium text-6xl mb-2 tracking-tighter">Magically simplify <span>accounting and taxes</span></div>
        <div className="flex flex-col text-2xl font-light text-neutral-500">Automated bookkeeping, effortless tax filing, real‑time insights.<span>Set up in 10 mins. Back to building by 1:45 am.</span></div>
        <div className="flex gap-4">
            <button className='bg-[#2679f3] rounded-md px-3 py-1 text-white shadow-xl text-shadow-md tracking-wide font-medium hover:bg-blue-800'>Get started</button>
            <button className=" rounded-md px-3 py-1 text-black tracking-wide font-medium hover:bg-neutral-500">Pricing -</button>
        </div>
        <div className='mt-16 border border-neutral-200 rounded-xl shadow-xl'>
            <img src={pic} alt="hh" />
        </div>
    </div>
  )
}

export default Hero