import { useFormContext, useWatch } from 'react-hook-form'

import { createFontStepTwoConfig } from '@/entity/font'
import { useFontNameDuplicated } from '@/features/check-font-name-duplicate'

export const useStepTwoValidation = () => {
  const { name, engName, example } = createFontStepTwoConfig.attribute
  const { control } = useFormContext()
  const isFontNameDuplicated = useFontNameDuplicated()

  const [fontName, fontEngName, exampleText] = useWatch({
    control,
    name: [name.section, engName.section, example.section],
  })

  const isStepTwoValid = !!fontName && !!fontEngName && !!exampleText && !isFontNameDuplicated

  return isStepTwoValid
}
