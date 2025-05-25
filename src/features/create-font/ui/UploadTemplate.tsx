import { useRef } from 'react'

import { fontAttribute } from '@/entity/font'
import { SecondaryButton } from '@/shared/ui'

import { useFileUpload } from '../model/useFileUpload'

export const UploadTemplate = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { file, isLoading, handleFileChange } = useFileUpload(fontAttribute.file.section)

  const openFileDialog = () => inputRef.current?.click()

  return (
    <div className="flex-column items-center gap-[3.25rem]">
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="업로드된 템플릿 미리보기"
          className="rounded-large h-[28.4375rem] w-[28.4375rem] object-contain"
        />
      ) : (
        <div className="flex-center rounded-large bg-grey h-[28.4375rem] w-[28.4375rem]">
          <p className="text-xl font-medium">파일을 업로드해주세요.</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <SecondaryButton
        variant="outlined"
        onClick={openFileDialog}
        disabled={isLoading}
        className="w-full"
      >
        작성한 템플릿 업로드
      </SecondaryButton>
    </div>
  )
}
