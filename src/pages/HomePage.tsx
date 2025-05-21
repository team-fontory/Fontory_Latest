import { FirstLandingSection, HeroSection, MoreViewSection, SecondLandingSection } from '@/widgets'

const HomePage = () => {
  return (
    <div className="scroll-snap-y h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <div className="h-screen snap-start">
        <HeroSection />
      </div>
      <div className="h-screen snap-start">
        <FirstLandingSection />
      </div>
      <div className="h-screen snap-start">
        <SecondLandingSection />
      </div>
      <div className="h-screen snap-start">
        <MoreViewSection />
      </div>
    </div>
  )
}

export default HomePage
