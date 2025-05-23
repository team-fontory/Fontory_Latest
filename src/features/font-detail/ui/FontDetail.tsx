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
  return (
    <div>
      <div className="mb-[6.25rem] flex items-end gap-20">
        <h5 className="font-detail-title">온글잎 오키티콘</h5>
        <p className="font-detail-writer">오키티콘</p>
      </div>

      <div className="grid grid-cols-2 gap-[6.25rem]">
        <div className="flex-column gap-8">
          <p className="font-detail-label">폰트 정보</p>
          <div className="flex-column gap-6">
            <FontDetailMeta label="제작 일자" value={'2024-12-05'} />
            <FontDetailMeta label="다운로드 수" value={'532 회'} />
            <FontDetailMeta label="북마크 수" value={'232 회'} />
          </div>
        </div>

        <div className="flex-column gap-8">
          <p className="font-detail-label">예시 문구</p>
          <textarea rows={3} className="font-preview-metadata" />
        </div>
      </div>
    </div>
  )
}
