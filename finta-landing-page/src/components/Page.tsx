import Container from "./Container"
import Hero from "./Hero"
import NavBar from "./NavBar"

const Page = () => {
  return (
    <div className="h-screen relative [background:radial-gradient(125%_100%_at_50%_0,#fff_6.32%,#e0f0ff_29.28%,#e7effd_68.68%,#fff_100%)]">
        <div className=" max-w-5xl mx-auto absolute inset-0 h-full w-full">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300 via-neutral-300 to-transparent "/>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300 via-neutral-300 to-transparent"/>
        </div>
            <Container>
        <NavBar />
        <Hero />    
      </Container>
    </div>
  )
}

export default Page