import { Suspense } from 'react'

import { type IconComponent, iconMap, type IconName } from './iconMap'

type IconProps = {
  name: IconName
  size?: number | string
  className?: string
} & React.SVGProps<SVGSVGElement>

/**
 * `iconMap`에서 `name`에 해당하는 SVG 컴포넌트를 렌더링
 *
 * @property name - 사용할 아이콘의 이름 (`iconMap`에 등록된 키)
 * @property size - 아이콘의 가로/세로 크기
 * @property className - 클래스명
 */

export const Icon = ({ name, size, className = '', ...props }: IconProps) => {
  const SvgIcon: IconComponent | undefined = iconMap[name]

  if (!SvgIcon) {
    console.error(`"${name}" 아이콘은 등록되어있지 않습니다.`)
    return null
  }

  return (
    <Suspense fallback={null}>
      <SvgIcon width={size} height={size} className={className} {...props} />
    </Suspense>
  )
}
