import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useFontNameCheckActions } from '@/features/check-font-name-duplicate'

import { useCreateFontStepActions } from '../model/createFontStep.store'

export const useResetCreateFontForm = () => {
  const { reset } = useFormContext()
  const { resetFontNameCheckState } = useFontNameCheckActions()
  const { resetStep } = useCreateFontStepActions()

  const resetAll = useCallback(() => {
    reset()
    resetFontNameCheckState()
    resetStep()
  }, [reset, resetFontNameCheckState, resetStep])

  return { resetAll }
}
