import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { PublicPage } from './PublicPage'
import { getServices } from './lib/api/services'
import { getTireServices } from './lib/api/tire-services'
import './index.css'

function App() {
  const [services, setServices] = useState<any[]>([])
  const [tireServices, setTireServices] = useState<any[]>([])

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

  return <PublicPage services={services} tireServices={tireServices} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
