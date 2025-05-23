import { FormProvider } from 'react-hook-form'

import type { CreateFontStepOneFormType } from '@/entity/font'
import { createFontStepOneSchema } from '@/entity/font'
import { DownloadTemplate, FileUploadButton, UploadTemplate } from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { SectionHeader, StepProgressBar } from '@/shared/ui'

const CreateFontStepOnePage = () => {
  const formMethods = useCustomForm<CreateFontStepOneFormType>(createFontStepOneSchema)

  return (
    <FormProvider {...formMethods}>
      <form className="my-[16.63rem] min-h-screen px-48">
        <SectionHeader title="CREATION" />
        <StepProgressBar
          currentStep={1}
          totalSteps={3}
          label="아래의 템플릿을 다운받아 작성해주세요."
        />

        <div className="my-[6.25rem] grid grid-cols-2 gap-40">
          <DownloadTemplate />
          <UploadTemplate />
        </div>

        <FileUploadButton />
      </form>
    </FormProvider>
  )
}

export default CreateFontStepOnePage
