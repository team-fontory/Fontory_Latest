/**
 * 요소가 뷰포트에 진입할 때 scale 애니메이션을 적용하는 motion 설정 유틸
 *
 * @param {number} from - 초기 스케일 값 (기본값: 1)
 * @param {number} to - 뷰포트 진입 후 도달할 최종 스케일 값 (기본값: 2)
 * @param {number} duration - 애니메이션 지속 시간 (초) (기본값: 0.6)
 * @param {number} delay - 애니메이션 시작 지연 시간 (초) (기본값: 0)
 * @param {boolean} once - true일 경우 한 번만 실행됨 (기본값: false)
 * @param {number} amount - 요소의 어느 정도가 뷰포트에 보여야 애니메이션 실행될지 비율 (0~1, 기본값: 0.3)
 *
 * @returns Framer Motion의 motion props 객체 (initial, whileInView, transition, viewport)
 */

type ScaleAnimationOptions = {
  from?: number
  to?: number
  duration?: number
  delay?: number
  once?: boolean
  amount?: number
}

export const getScaleInViewAnimation = ({
  from = 1,
  to = 2,
  duration = 0.6,
  delay = 0,
  once = false,
  amount = 0.3,
}: ScaleAnimationOptions = {}) => {
  return {
    initial: { scale: from },
    whileInView: { scale: to },
    transition: { duration, delay, ease: 'easeOut' },
    viewport: { once, amount },
  }
}
