import { useFontDetail } from '@/entity/font'
import { useDynamicFont, useParamFontId } from '@/shared/hooks'

type Props = {
  label: string
  value: string | number
}

const FontDetailMeta = ({ label, value }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <p className="font-detail-meta-label">{label}</p>
      <p className="font-detail-meta-value text-darkgrey">{value}</p>
    </div>
  )
}

export const FontDetail = () => {
  const fontId = useParamFontId()
  const { data: fontDetail } = useFontDetail(fontId)

  const { fontName, writerName, example, bookmarkCount, downloadCount, fontAddr } = fontDetail
  const { fontFamily, isLoaded } = useDynamicFont(fontAddr, fontId)

  return (
    <div>
      <div
        className="mb-[6.25rem] flex items-end gap-20"
        style={isLoaded ? { fontFamily } : undefined}
      >
        <h5 className="font-detail-title">{fontName}</h5>
        <p className="font-detail-writer">{writerName}</p>
      </div>

      <div className="grid grid-cols-2 gap-[6.25rem]">
        <div className="flex-column gap-8">
          <p className="font-detail-label">폰트 정보</p>
          <div className="flex-column gap-6">
            <FontDetailMeta label="제작 일자" value={'2024-12-05'} />
            <FontDetailMeta label="다운로드 수" value={`${downloadCount} 회`} />
            <FontDetailMeta label="북마크 수" value={`${bookmarkCount} 회`} />
          </div>
        </div>

        <div className="flex-column gap-8">
          <p className="font-detail-label">예시 문구</p>
          <textarea
            rows={3}
            readOnly
            value={example}
            className="font-preview-metadata"
            style={isLoaded ? { fontFamily } : undefined}
          />
        </div>
      </div>

      <div className="flex-column mt-[6.25rem] gap-8">
        <p className="font-detail-label">미리보기</p>
        <textarea
          rows={3}
          placeholder="원하시는 문구를 작성해보세요."
          className="font-preview-metadata placeholder:font-pretandard resize-none"
          style={isLoaded ? { fontFamily } : undefined}
        />
      </div>
    </div>
  )
}
