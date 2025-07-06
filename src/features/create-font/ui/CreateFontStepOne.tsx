import { FormProvider } from 'react-hook-form'

import { type CreateFontStepOneFormType, createFontStepOneSchema } from '@/entity/font'
import { useCustomForm } from '@/shared/hooks'
import { SectionHeader, StepProgressBar } from '@/shared/ui'
import { Layout } from '@/widgets'

import { useCreateFontValues } from '../model/createFont.store'

import { DownloadTemplate } from './DownloadTemplate'
import { StepOneButtonNavigation } from './StepOneButtonNavigation'
import { UploadTemplate } from './UploadTemplate'

export const CreateFontStepOne = () => {
  const { file } = useCreateFontValues()
  const formMethods = useCustomForm<CreateFontStepOneFormType>(createFontStepOneSchema, {
    defaultValues: { file },
  })

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
