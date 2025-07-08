import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

import { useNickNameCheckActions } from '@/features/check-nickname-duplicate/model/nicknameCheck.store'

import { useSignupStepActions } from '../model/signupStep.store'

export const useResetSignupForm = () => {
  const { reset } = useFormContext()
  const { resetNickNameCheckState } = useNickNameCheckActions()
  const { resetStep } = useSignupStepActions()

  const resetAll = useCallback(() => {
    reset()
    resetNickNameCheckState()
    resetStep()
  }, [reset, resetNickNameCheckState, resetStep])

  return { resetAll }
}
