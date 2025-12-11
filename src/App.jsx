import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage.jsx'
import './App.css'

const LangRedirect = () => {
  const { lang } = useParams()
  const safeLang = lang === 'ru' ? 'ru' : 'en'
  return <Navigate to={`/${safeLang}/windows/open-source`} replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en/windows/open-source" replace />} />
        <Route path="/:lang" element={<LangRedirect />} />
        <Route path="/:lang/:section/:page" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/en/windows/open-source" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
