import { useProgressFontList } from '@/entity/font'
import { EMPTY_MESSAGE } from '@/shared/config'

const ProgressTableBody = () => {
  const tableCommonStyle = 'py-6 text-center'

  const { data: progressFontInfo } = useProgressFontList()

  if (progressFontInfo.isEmpty) {
    return (
      <p className="text-darkgrey py-20 text-center text-4xl font-bold">{EMPTY_MESSAGE.noFont}</p>
    )
  }

  return (
    <tbody>
      {progressFontInfo.fontList.map(({ id, name, createdAt }) => (
        <tr key={id} className="font-progress-value">
          <td className={tableCommonStyle}>{name}</td>
          <td className={tableCommonStyle}>{createdAt}</td>
        </tr>
      ))}
    </tbody>
  )
}

export const ProgressTable = () => {
  const tableCommonStyle = 'py-6 text-center'

  return (
    <table className="border-b-secondary w-full border-b-[3px]">
      <thead className="border-y-secondary font-progress-label border-y-[3px]">
        <tr>
          <th className={tableCommonStyle}>제작 중인 폰트 이름</th>
          <th className={tableCommonStyle}>제작 요청 시간</th>
        </tr>
      </thead>
      <ProgressTableBody />
    </table>
  )
}
