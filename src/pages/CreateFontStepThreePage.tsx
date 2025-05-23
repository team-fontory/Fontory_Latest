import { FormProvider } from 'react-hook-form'

import {
  type CreateFontStepThreeFormType,
  createFontStepThreeSchema,
  fontAttribute,
} from '@/entity/font'
import { StepThreeButtonNavigation } from '@/features/create-font'
import { useCustomForm } from '@/shared/hooks'
import { Input, SectionHeader, StepProgressBar } from '@/shared/ui'

const CreateFontStepThreePage = () => {
  const formMethods = useCustomForm<CreateFontStepThreeFormType>(createFontStepThreeSchema)

  return (
    <div className="my-[16.63rem] min-h-screen px-48">
      <SectionHeader title="CREATION" />
      <StepProgressBar currentStep={3} totalSteps={3} label="전화번호를 입력해주세요. (선택)" />

      <FormProvider {...formMethods}>
        <form className="font-page-description mt-[6.25rem] grid grid-cols-2 items-end gap-6">
          <Input {...fontAttribute.phoneNumber} />
          <p className="text-right">
            제작 소요 시간은 최대 10분입니다.
            <br /> 제작이 완료되면 입력하신 전화번호로 알림을 전송해드립니다.
          </p>
        </form>

        <StepThreeButtonNavigation />
      </FormProvider>
    </div>
  )
}

export default CreateFontStepThreePage
