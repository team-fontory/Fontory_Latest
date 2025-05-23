const progress = [
  {
    id: 0,
    name: '휴먼휴먼 둥글체',
    createdAt: '2025-12-13 12:00',
  },
  {
    id: 1,
    name: '휴먼휴먼 둥글체',
    createdAt: '2025-12-13 12:00',
  },
]

export const ProgressTable = () => {
  const tableCommonStyle = 'py-6 text-center'

  return (
    <table className="border-b-secondary w-full border-b-[3px]">
      <thead className="border-y-secondary font-progress-label border-y-[3px]">
        <th className={tableCommonStyle}>제작 중인 폰트 이름</th>
        <th className={tableCommonStyle}>제작 요청 시간</th>
      </thead>

      {progress.map(({ id, name, createdAt }) => (
        <tr key={id} className="font-progress-value">
          <td className={tableCommonStyle}>{name}</td>
          <td className={tableCommonStyle}>{createdAt}</td>
        </tr>
      ))}
    </table>
  )
}
