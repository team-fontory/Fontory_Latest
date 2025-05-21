import { motion } from 'framer-motion'

import heroBg from '@/shared/assets/hero-bg.png'
import { getDirectionAnimation } from '@/shared/lib'

export const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-amber-100 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute bottom-[13.95%] left-[12.7%]">
        <h1 className="text-[14rem] font-black">Fontory</h1>
        <h2 className="text-2xl font-bold">아날로그 감성과 디지털 엔진의 만남</h2>
      </div>

      <motion.span
        {...getDirectionAnimation('right', { distance: 80, duration: 0.6 })}
        className="absolute top-[22.7%] right-[20.9%] text-3xl font-bold"
      >
        Fusion
      </motion.span>

      <motion.span
        {...getDirectionAnimation('left', { distance: 80, duration: 0.6 })}
        className="absolute top-[31.8%] right-[33.2%] text-4xl font-bold"
      >
        Precision
      </motion.span>

      <motion.span
        {...getDirectionAnimation('right', { distance: 80, duration: 0.6 })}
        className="absolute top-[41.1%] right-[9.1%] text-5xl font-bold"
      >
        Creativity
      </motion.span>
    </section>
  )
}
