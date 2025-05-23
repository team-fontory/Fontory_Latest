import { useFormContext, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { fontAttribute } from '@/entity/font'
import { PrimaryButton } from '@/shared/ui'

export const FileUploadButton = () => {
  const navigate = useNavigate()
  const file = useWatch({ name: fontAttribute.file.section })

  const { handleSubmit } = useFormContext()

  const onSubmit = () => {
    navigate(ROUTES.CREATE_FONT_STEP_TWO)
  }

  return (
    <PrimaryButton
      direction="right"
      className="mt-5 ml-auto"
      onClick={handleSubmit(onSubmit)}
      disabled={!file}
    >
      다음 단계
    </PrimaryButton>
  )
}
