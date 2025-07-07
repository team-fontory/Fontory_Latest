import { useFormContext } from 'react-hook-form'

import { useCreateFontStepActions } from '../model/createFontStep.store'

export const useNextStepButton = (section: string | string[], nextStep: number) => {
  const { trigger } = useFormContext()
  const { setStep } = useCreateFontStepActions()

  const handleClickNextButton = async () => {
    const isValid = await trigger(section)
    if (isValid) {
      setStep(nextStep)
    }
  }

  return { handleClickNextButton }
}
