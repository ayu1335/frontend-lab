const Hero = () => {
  return (
    
    <div className="my-42 flex flex-col items-center gap-6">
        <h1 className="max-w-2xl font-bold text-center text-6xl tracking-wide bg-linear-to-r from-neutral-200 to-neutral-600 bg-clip-text text-transparent"> Unleash the power of intuitive finance</h1>
        <p className="text-neutral-400 max-w-2xl font-bold text-center ">Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
        <button className="bg-transparent border-neutral-800 border hover:shadow-lg shadow-cyan-500/50 hover:ring-2 ring-blue-400/50   text-white font-bold py-3 px-6 rounded-full mt-4 transition-colors duration-300">
          Join the waitlist
        </button>
        
    </div>
    
  )
}

export default Hero