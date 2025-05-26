import { AppRouter } from './app/router'
import { useScrollToTop } from './shared/hooks'
import { CustomToast } from './shared/ui'

function App() {
  useScrollToTop()

  return (
    <>
      <CustomToast />
      <AppRouter />
    </>
  )
}

export default App
