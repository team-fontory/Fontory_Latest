import { useFormContext } from 'react-hook-form'

import { fontAttribute } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

import { useCreateFontStepActions } from '../model/createFontStep.store'

import { DownloadTemplate } from './DownloadTemplate'
import { UploadTemplate } from './UploadTemplate'

export const CreateFontStepOne = () => {
  const { trigger, watch } = useFormContext()
  const { setStep } = useCreateFontStepActions()

  const onClickButton = async () => {
    const isValid = await trigger(fontAttribute.file.section)
    if (isValid) {
      setStep(2)
    }
  }

  return (
    <>
      <div className="my-[6.25rem] grid grid-cols-2 gap-40">
        <DownloadTemplate />
        <UploadTemplate />
      </div>

      <PrimaryButton
        direction="right"
        className="mt-5 ml-auto"
        onClick={onClickButton}
        disabled={!watch(fontAttribute.file.section)}
      >
        다음 단계
      </PrimaryButton>
    </>
  )
}
