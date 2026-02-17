import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { PublicPage } from './PublicPage'
import { PrivacyPage } from './PrivacyPage'
import { getServices } from './lib/api/services'
import { getTireServices } from './lib/api/tire-services'
import './index.css'

function App() {
  const [services, setServices] = useState<any[]>([])
  const [tireServices, setTireServices] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState<'main' | 'privacy'>(() => {
    // Проверяем URL при инициализации
    return window.location.pathname === '/privacy' ? 'privacy' : 'main'
  })

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesData, tireServicesData] = await Promise.all([
          getServices(),
          getTireServices()
        ])
        setServices(servicesData)
        setTireServices(tireServicesData)
      } catch (error: any) {
        console.error('Error loading data:', error)
      }
    }
    loadData()
  }, [])

  const navigateToPrivacy = () => {
    setCurrentPage('privacy')
    window.history.pushState({}, '', '/privacy')
  }

  const navigateToMain = () => {
    setCurrentPage('main')
    window.history.pushState({}, '', '/')
  }

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/privacy') {
        setCurrentPage('privacy')
      } else {
        setCurrentPage('main')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (currentPage === 'privacy') {
    return <PrivacyPage onNavigateToMain={navigateToMain} />
  }

  return <PublicPage services={services} tireServices={tireServices} onNavigateToPrivacy={navigateToPrivacy} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
