import { formatIsoToDateTime } from '@/shared/lib'

import { useProgressFontList } from '../api/myFont.query'

export const ProgressTable = () => {
  const { data: progressList } = useProgressFontList()

  const tableCommonStyle = 'py-6 text-center'

  return (
    <table className="border-b-secondary w-full border-b-[3px]">
      <thead className="border-y-secondary font-progress-label border-y-[3px]">
        <tr>
          <th className={tableCommonStyle}>제작 중인 폰트 이름</th>
          <th className={tableCommonStyle}>제작 요청 시간</th>
        </tr>
      </thead>

      <tbody>
        {progressList.map(({ id, name, createdAt }) => (
          <tr key={id} className="font-progress-value">
            <td className={tableCommonStyle}>{name}</td>
            <td className={tableCommonStyle}>{formatIsoToDateTime(createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
