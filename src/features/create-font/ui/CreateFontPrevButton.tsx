import { PrimaryButton } from '@/components/PrimaryButton'

import { useCreateFontStepActions } from '../model/createFontStep.store'

type Props = {
  prevPageNumber: number
}

export const CreateFontPrevButton = ({ prevPageNumber }: Props) => {
  const { setStep } = useCreateFontStepActions()

  const onClickPrevButton = () => {
    setStep(prevPageNumber)
  }

  return (
    <PrimaryButton direction="left" onClick={onClickPrevButton}>
      이전 단계
    </PrimaryButton>
  )
}
