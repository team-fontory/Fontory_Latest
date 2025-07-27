import { cn } from '@/utils/cn'

type Props = {
  label: string
  currentStep: number
  totalSteps: number
}

/**
 * 가입 절차 등의 단계를 시각적으로 표시하는 진행 바 컴포넌트
 *
 * - 현재 스텝 번호에 따라 색상 강조
 * - 스텝 수만큼 바를 균등하게 나눔
 * - 상단에 "Step {n}. {label}" 텍스트 출력
 *
 * @param currentStep 현재 진행 중인 단계 (1부터 시작)
 * @param totalSteps 전체 단계 수
 * @param label 현재 단계에 대한 설명 텍스트
 */

export const StepProgressBar = ({ label, currentStep, totalSteps }: Props) => {
  return (
    <div className="flex-column gap-9">
      <div className="font-step">{`Step ${currentStep}. ${label}`}</div>

      <div className="flex w-full gap-2.5">
        {Array.from({ length: totalSteps }, (_, i) => {
          const isActive = i < currentStep

          return (
            <div
              key={i}
              className={cn(
                'rounded-small h-[1.0625rem] flex-1 duration-300',
                isActive ? 'bg-primary' : 'bg-grey',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
