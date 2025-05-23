import { AppRouter } from './app/router'
import { CustomToast, NavigationBar } from './shared/ui'

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
