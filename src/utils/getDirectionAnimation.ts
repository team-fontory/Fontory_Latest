type Direction = 'left' | 'right' | 'up' | 'down'

type AnimationOptions = {
  distance?: number
  duration?: number
  delay?: number
  once?: boolean
  amount?: number
}

export const getDirectionAnimation = (
  direction: Direction,
  { distance = 50, duration = 0.6, delay = 0, once = false, amount = 0.3 }: AnimationOptions = {},
) => {
  const from = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  }[direction]

  return {
    initial: { opacity: 0, ...from },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration, delay, ease: 'easeOut' },
    viewport: { once, amount },
  }
}
