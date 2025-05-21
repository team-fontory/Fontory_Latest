type Props = {
  title: string
}

/**
 * 섹션 제목을 표시하는 헤더 컴포넌트
 *
 * @param {string} props.title - 섹션 제목 텍스트
 * @returns {JSX.Element} 스타일이 적용된 섹션 헤더
 */

export const SectionHeader = ({ title }: Props) => {
  return (
    <h4 className="font-page-title text-primary border-b-primary border-b-[0.1875rem] pb-[0.75rem]">
      {title}
    </h4>
  )
}
