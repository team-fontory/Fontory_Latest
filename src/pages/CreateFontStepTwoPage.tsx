import { FormProvider } from 'react-hook-form'

import {
  type CreateFontStepTwoFormType,
  createFontStepTwoSchema,
  fontAttribute,
} from '@/entity/font'
import { CheckFontNameDuplicate } from '@/features/check-font-name-duplicate'
import { StepTwoButtonNavigation } from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { Input, SectionHeader, StepProgressBar, Textarea } from '@/shared/ui'

const CreateFontStepTwoPage = () => {
  const formMethods = useCustomForm<CreateFontStepTwoFormType>(createFontStepTwoSchema)

  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <SectionHeader title="CREATION" />
      <StepProgressBar currentStep={2} totalSteps={3} label="폰트 정보를 입력해주세요." />

      <FormProvider {...formMethods}>
        <form className="flex-column mt-[6.25rem] gap-[3.75rem]">
          <div className="grid grid-cols-2 gap-6">
            <CheckFontNameDuplicate {...fontAttribute.name} />
            <Input {...fontAttribute.engName} />
          </div>

          <Textarea {...fontAttribute.example} />
        </form>

        <StepTwoButtonNavigation />
      </FormProvider>
    </div>
  )
}

export default CreateFontStepTwoPage
