import { SecondaryButton } from '@/shared/ui'

export const DownloadTemplate = () => {
  return (
    <div className="flex-column items-center gap-[3.25rem]">
      {/* 이미지로 변경 */}
      <div className="rounded-large bg-grey h-[28.4375rem] w-[28.4375rem]" />

      <a href="/template/font_template.png" download="폰트 제작 템플릿.png" className="w-full">
        <SecondaryButton variant="outlined" className="w-full">
          템플릿 다운받기
        </SecondaryButton>
      </a>
    </div>
  )
}
