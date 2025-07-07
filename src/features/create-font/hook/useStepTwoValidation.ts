import { useFormContext, useWatch } from 'react-hook-form'

import { createFontStepTwoConfig } from '@/entity/font'
import { useFontNameChecked } from '@/features/check-font-name-duplicate'

export const useStepTwoValidation = () => {
  const { name, engName, example } = createFontStepTwoConfig.attribute
  const { control } = useFormContext()
  const isChecked = useFontNameChecked()

  const [fontName, fontEngName, exampleText] = useWatch({
    control,
    name: [name.section, engName.section, example.section],
  })

  const isStepTwoValid = !!fontName && !!fontEngName && !!exampleText && isChecked

  return isStepTwoValid
}
