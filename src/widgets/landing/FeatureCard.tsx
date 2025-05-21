import { Icon } from '@/shared/ui'
import type { IconName } from '@/shared/ui/Icon/iconMap'

type Props = {
  title: string
  description: string
  icon: IconName
  bgImage: string
}

export const FeatureCard = ({ icon, title, description, bgImage }: Props) => {
  return (
    <div
      className="flex-column rounded-medium w-[34.5rem] items-center gap-10 bg-cover bg-center px-5 py-10 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Icon name={icon} size={'10rem'} />

      <div className="flex-column items-center gap-5">
        <h3 className="font-main-card-title">{title}</h3>
        <p className="font-main-card-description">{description}</p>
      </div>
    </div>
  )
}
