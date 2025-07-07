import { createFontStepTwoConfig } from '@/entity/font'
import { FontNameCheckField } from '@/features/check-font-name-duplicate'
import { Input, PrimaryButton, Textarea } from '@/shared/ui'

import { useNextStepButton } from '../hook/useNextStepButton'
import { useStepTwoValidation } from '../hook/useStepTwoValidation'

import { CreateFontPrevButton } from './CreateFontPrevButton'

export const CreateFontStepTwo = () => {
  const isStepTwoValid = useStepTwoValidation()

  const { name, engName, example } = createFontStepTwoConfig.attribute
  const { handleClickNextButton } = useNextStepButton(
    [name.section, engName.section, example.section],
    3,
  )

  return (
    <>
      <div className="flex-column mt-[6.25rem] gap-[3.75rem]">
        <div className="grid grid-cols-2 gap-6">
          <FontNameCheckField {...name} />
          <Input {...engName} />
        </div>
        <Textarea {...example} />
      </div>

      <div className="flex-between-center mt-[6.25rem]">
        <CreateFontPrevButton prevPageNumber={1} />
        <PrimaryButton direction="right" disabled={!isStepTwoValid} onClick={handleClickNextButton}>
          다음 단계
        </PrimaryButton>
      </div>
    </>
  )
}
