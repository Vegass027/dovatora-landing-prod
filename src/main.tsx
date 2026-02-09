import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { PublicPage } from './PublicPage'
import { getServices } from './lib/api/services'
import { getTireServices } from './lib/api/tire-services'
import './index.css'

function App() {
  const [services, setServices] = useState<any[]>([])
  const [tireServices, setTireServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        setError(error.message || 'Не удалось загрузить данные')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Ошибка загрузки</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    )
  }

  return <PublicPage services={services} tireServices={tireServices} />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
