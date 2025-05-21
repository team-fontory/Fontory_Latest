import { useRef } from 'react'
import { motion } from 'framer-motion'

import greenBg from '@/shared/assets/main-card/green.png'
import yellowBg from '@/shared/assets/main-card/yellow.png'
import { useScrollScale } from '@/shared/hooks'
import { getDirectionAnimation } from '@/shared/lib'

import { FeatureCard } from './FeatureCard'

const SECOND_SECTION_FEATURES = [
  {
    title: '자동 생성',
    description: '48자를 작성하면 AI가 전체 글자를 자동 생성합니다.',
    icon: 'webcam',
    bgImage: yellowBg,
    animateDirection: 'up' as const,
  },
  {
    title: '적은 부담',
    description: '복잡한 과정 없이, 누구나 가볍게 폰트를 만들 수 있어요.',
    icon: 'chair',
    bgImage: greenBg,
    animateDirection: 'right' as const,
  },
] as const

export const SecondLandingSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const scale = useScrollScale({ ref: sectionRef, range: [1, 2.5] })

  return (
    <section ref={sectionRef} className="relative h-screen">
      <h4 className="font-main-description pt-[20.3vh] text-center">
        단 48자만으로 완성되는 전체 폰트
      </h4>

      <motion.h3 style={{ scale }} className="font-main-title text-primary text-center">
        Create more with less
      </motion.h3>

      <div className="mt-6 flex justify-center gap-6">
        {SECOND_SECTION_FEATURES.map((feature, idx) => (
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
