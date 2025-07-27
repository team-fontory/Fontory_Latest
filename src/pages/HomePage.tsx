import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import {
  FirstLandingSection,
  Footer,
  HeroSection,
  MoreViewSection,
  NavigationBar,
  SecondLandingSection,
} from '@/widgets'

const HomePage = () => {
  const { ref: heroRef, isIntersecting: isHeroVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div className="overflow-x-hidden">
      <NavigationBar isTransparent={isHeroVisible} />
      <main className="min-h-screen">
        <div className="scroll-snap-y h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
          <div ref={heroRef} className="h-screen snap-start">
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

          <div className="snap-start">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
