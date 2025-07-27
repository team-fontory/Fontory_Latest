import { SyncLoader } from 'react-spinners'

import { getCssVariable } from '@/utils/getCssVariable'

export const Loading = () => {
  const color = getCssVariable('--color-primary')

  return (
    <div className="flex-center h-screen w-screen">
      <SyncLoader color={color} />
    </div>
  )
}
