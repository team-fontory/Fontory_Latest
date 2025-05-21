import type { RefObject } from 'react'
import { useScroll, useTransform } from 'framer-motion'

type Props = {
  ref: RefObject<HTMLElement | null>
  range: [number, number]
}

export const useScrollScale = ({ ref, range }: Props) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: true,
  })

  return useTransform(scrollYProgress, [0, 1], range)
}
