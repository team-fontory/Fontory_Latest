import { Link } from 'react-router-dom'

import { Icon } from '@/shared/ui'

export const MoreViewSection = () => {
  return (
    <section className="flex-column h-screen justify-center gap-[7rem] px-[12rem] py-[2rem]">
      <div className="flex-column gap-4">
        <h4 className="font-main-description">Fontory의 AI 활용 살펴보기</h4>
        <h3 className="font-main-subtitle text-primary">How to use AI in font creation</h3>
      </div>

      <Link
        to={'https://www.google.com'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-align-center hover:bg-primary rounded-small group w-fit gap-4 self-end py-3 pr-3 pl-4 transition-all hover:text-white"
      >
        <span className="font-main-more">MORE VIEW</span>
        <Icon name={'arrow-right'} size={'3.25rem'} className="group-hover:text-white" />
      </Link>
    </section>
  )
}
