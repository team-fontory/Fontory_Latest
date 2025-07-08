import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './app/providers/AuthProvider.tsx'
import { QueryProvider } from './app/providers/QueryProvider.tsx'
import App from './App.tsx'

import '@/app/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </QueryProvider>,
)
