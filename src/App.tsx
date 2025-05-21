import { AppRouter } from './app/router'
import { NavigationBar } from './shared/ui'

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavigationBar />
      <AppRouter />
    </div>
  )
}

export default App
