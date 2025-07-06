import { fontAttribute } from '@/entity/font'
import { Input } from '@/shared/ui'

import { CreateFontButton } from './CreateFontButton'
import { CreateFontPrevButton } from './CreateFontPrevButton'

export const CreateFontStepThree = () => {
  return (
    <>
      <div className="font-page-description mt-[6.25rem] grid grid-cols-2 items-end gap-6">
        <Input {...fontAttribute.phoneNumber} />
        <p className="text-right">
          제작 소요 시간은 최대 10분입니다.
          <br /> 제작이 완료되면 입력하신 전화번호로 알림을 전송해드립니다.
        </p>
      </div>

      <div className="flex-between-center mt-[6.25rem]">
        <CreateFontPrevButton prevPageNumber={2} />
        <CreateFontButton />
      </div>
    </>
  )
}
