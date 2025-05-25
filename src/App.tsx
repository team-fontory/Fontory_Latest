import { AppRouter } from './app/router'
import { CustomToast } from './shared/ui'
import { NavigationBar } from './widgets'

function App() {
  return (
    <>
      <CustomToast />
      <div className="overflow-x-hidden">
        <NavigationBar />
        <AppRouter />
      </div>
    </>
  )
}

export default App
