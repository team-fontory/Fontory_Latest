import { useFormContext } from 'react-hook-form'

import { PrimaryButton } from '@/components/PrimaryButton'
import { createFontStepOneConfig } from '@/entity/font'

import { useNextStepButton } from '../hook/useNextStepButton'

import { DownloadTemplate } from './DownloadTemplate'
import { UploadTemplate } from './UploadTemplate'

export const CreateFontStepOne = () => {
  const section = createFontStepOneConfig.attribute.file.section

  const { watch } = useFormContext()
  const { handleClickNextButton } = useNextStepButton(section, 2)

  return (
    <>
      <div className="my-[6.25rem] grid grid-cols-2 gap-40">
        <DownloadTemplate />
        <UploadTemplate />
      </div>

      <PrimaryButton
        direction="right"
        className="mt-5 ml-auto"
        onClick={handleClickNextButton}
        disabled={!watch(section)}
      >
        다음 단계
      </PrimaryButton>
    </>
  )
}
