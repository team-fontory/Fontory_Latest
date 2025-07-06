import {
  CreateFontStepOne,
  CreateFontStepThree,
  CreateFontStepTwo,
  useCreateFontStep,
} from '@/features/create-font'

const CreateFont = () => {
  const currentStep = useCreateFontStep()

  switch (currentStep) {
    case 1:
      return <CreateFontStepOne />
    case 2:
      return <CreateFontStepTwo />
    case 3:
      return <CreateFontStepThree />
  }
}

export default CreateFont
