import { useEffect, useRef, useState } from 'react'

/**
 * 특정 요소가 뷰포트에 보이는지 여부를 감지하는 훅
 *
 * @param threshold - 요소의 얼마나 보여야 보이는 것으로 판단할지 (0 ~ 1)
 * @returns ref - 타겟 요소에 할당할 ref
 * @returns isIntersecting - 요소가 보이는지 여부
 */
export const useIntersectionObserver = <T extends HTMLElement>(threshold = 0.1) => {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(true)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isIntersecting }
}
