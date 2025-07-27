import { Link } from 'react-router-dom'

import googleImage from '@/assets/login/google.png'
import naverImage from '@/assets/login/naver.png'
import { Layout } from '@/widgets'
import { SectionHeader } from '@/widgets/section'

const LoginPage = () => {
  return (
    <Layout hasPadding>
      <section className="flex-column gap-[6.25rem]">
        <SectionHeader title={'LOGIN'} />

        <div className="flex-between gap-6">
          <Link
            to={`${import.meta.env.VITE_PUBLIC_SERVER_DOMAIN}/oauth2/authorization/naver`}
            className="flex-center w-full cursor-pointer"
          >
            <img src={naverImage} alt="네이버 로그인" />
          </Link>

          <Link
            to={`${import.meta.env.VITE_PUBLIC_SERVER_DOMAIN}/oauth2/authorization/google`}
            className="flex-center shadow-google w-full cursor-pointer rounded-2xl"
          >
            <img src={googleImage} alt="구글 로그인" />
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default LoginPage
