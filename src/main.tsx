import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './shared/config/queryClient'
import App from './app/App'
import './index.css'
import { ServiceProvider } from '@shared/di/ServiceProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ServiceProvider>
          <App />
        </ServiceProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
