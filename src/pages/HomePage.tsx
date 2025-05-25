import { useIntersectionObserver } from '@/shared/hooks'
import {
  FirstLandingSection,
  HeroSection,
  Layout,
  MoreViewSection,
  SecondLandingSection,
} from '@/widgets'

const HomePage = () => {
  const { ref: heroRef, isIntersecting: isHeroVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <Layout isTransparentNav={isHeroVisible}>
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
      </div>
    </Layout>
  )
}

export default HomePage
