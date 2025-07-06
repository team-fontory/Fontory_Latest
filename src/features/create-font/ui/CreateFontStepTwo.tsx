import { useFormContext, useWatch } from 'react-hook-form'

import { fontAttribute } from '@/entity/font'
import { CheckFontNameDuplicate, useVerificationStatus } from '@/features/check-font-name-duplicate'
import { Input, PrimaryButton, Textarea } from '@/shared/ui'

import { useCreateFontStepActions } from '../model/createFontStep.store'

import { CreateFontPrevButton } from './CreateFontPrevButton'

export const CreateFontStepTwo = () => {
  const isVerified = useVerificationStatus()

  const { setStep } = useCreateFontStepActions()
  const { trigger, control } = useFormContext()

  const fontName = useWatch({ control, name: fontAttribute.name.section })
  const fontEngName = useWatch({ control, name: fontAttribute.engName.section })
  const example = useWatch({ control, name: fontAttribute.example.section })

  const isPartialValid = !!fontName && !!fontEngName && !!example && isVerified

  const onClickNextButton = async () => {
    const isValid = await trigger([
      fontAttribute.name.section,
      fontAttribute.engName.section,
      fontAttribute.example.section,
    ])

    if (isValid) {
      setStep(3)
    }
  }

  return (
    <>
      <div className="flex-column mt-[6.25rem] gap-[3.75rem]">
        <div className="grid grid-cols-2 gap-6">
          <CheckFontNameDuplicate {...fontAttribute.name} />
          <Input {...fontAttribute.engName} />
        </div>

        <Textarea {...fontAttribute.example} />
      </div>

      <div className="flex-between-center mt-[6.25rem]">
        <CreateFontPrevButton prevPageNumber={1} />

        <PrimaryButton direction="right" disabled={!isPartialValid} onClick={onClickNextButton}>
          다음 단계
        </PrimaryButton>
      </div>
    </>
  )
}
