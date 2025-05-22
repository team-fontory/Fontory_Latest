import { motion } from 'framer-motion'

import blueBg from '@/shared/assets/main-card/blue.png'
import redBg from '@/shared/assets/main-card/red.png'
import { getDirectionAnimation, getScaleInViewAnimation } from '@/shared/lib'

import { FeatureCard } from './FeatureCard'

const FIRST_SECTION_FEATURES = [
  {
    title: '빠른 제작',
    description: 'AI를 활용해 단 10분이면 손글씨 폰트 완성',
    icon: 'clock',
    bgImage: blueBg,
    animateDirection: 'left' as const,
  },
  {
    title: '문자 알림',
    description: '제작이 완료되면 문자로 알려드려요',
    icon: 'bell',
    bgImage: redBg,
    animateDirection: 'down' as const,
  },
] as const

export const FirstLandingSection = () => {
  return (
    <section className="relative h-screen">
      <h4 className="font-main-description pt-[20.3vh] text-center">
        단 10분만에 제작되는 손글씨 폰트
      </h4>

      <motion.h3
        {...getScaleInViewAnimation()}
        className="font-main-title text-primary text-center"
      >
        Create in a snap
      </motion.h3>

      <div className="mt-6 flex justify-center gap-6">
        {FIRST_SECTION_FEATURES.map((feature, idx) => (
          <motion.div
            key={feature.title}
            {...getDirectionAnimation(feature.animateDirection, {
              distance: 60,
              delay: idx * 0.1,
              once: false,
            })}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
