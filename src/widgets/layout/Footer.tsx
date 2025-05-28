import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="flex-center bg-grey/30 px-48 py-10">
      <ul className="flex-column font-footer items-end gap-3">
        <li>© 2025 Fontory. All Rights Reserved.</li>
        <li>
          <Link to={''}>서비스 이용약관</Link> | <Link to={''}>개인정보 처리방침</Link> |{' '}
          <Link to={''}>폰트 공유약관</Link>
        </li>
        <li>
          이 서비스는 NAVER Corp.의 [DM-Font](https://github.com/clovaai/dmfont) 기술을 활용하고
          있습니다.
        </li>
        <li className="font-bold">문의: fontory@fontory.co.kr</li>
      </ul>
    </footer>
  )
}
