import { SecondaryButton } from '@/shared/ui'

export const DownloadTemplate = () => {
  return (
    <div className="flex-column items-center gap-[3.25rem]">
      <img
        src={'/template/font_template.png'}
        alt="폰트 작성 템플릿"
        className="rounded-large border-grey h-[28.4375rem] w-[28.4375rem] border object-contain"
      />

      <a href="/template/font_template.png" download="폰트 제작 템플릿.png" className="w-full">
        <SecondaryButton variant="outlined" className="w-full">
          템플릿 다운받기
        </SecondaryButton>
      </a>
    </div>
  )
}
