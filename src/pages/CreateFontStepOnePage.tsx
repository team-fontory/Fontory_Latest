import { FormProvider } from 'react-hook-form'

import type { CreateFontStepOneFormType } from '@/entity/font'
import { createFontStepOneSchema } from '@/entity/font'
import { DownloadTemplate, StepOneButtonNavigation, UploadTemplate } from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

const CreateFontStepOnePage = () => {
  const formMethods = useCustomForm<CreateFontStepOneFormType>(createFontStepOneSchema)

  return (
    <Layout hasPadding>
      <FormProvider {...formMethods}>
        <form>
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

          <StepOneButtonNavigation />
        </form>
      </FormProvider>
    </Layout>
  )
}

export default CreateFontStepOnePage
