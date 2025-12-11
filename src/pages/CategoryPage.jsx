import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import CardGrid from '../components/CardGrid.jsx'
import Header from '../components/Header.jsx'
import { dataMap, fallbackRoute, sectionPages, titlesMap } from '../config/routesConfig.js'

const CategoryPage = () => {
  const { lang, section, page } = useParams()
  const normalizedLang = lang === 'ru' ? 'ru' : 'en'

  const pagesForSection = sectionPages[section]
  const dataset = dataMap[section]

  if (!pagesForSection || !dataset || !pagesForSection.includes(page)) {
    return <Navigate to={fallbackRoute} replace />
  }

  const pageTitle =
    titlesMap?.[section]?.[page]?.[normalizedLang] || titlesMap?.[section]?.[page]?.en || page

  const cards = dataset.filter((item) => item.pages?.includes(page))

  return (
    <div className="app-shell">
      <Header lang={normalizedLang} section={section} page={page} />
      <main className="container py-4">
        <Breadcrumbs
          lang={normalizedLang}
          section={section}
          page={page}
          pageTitle={pageTitle}
          availablePages={pagesForSection}
        />
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <h2 className="mb-0">{pageTitle}</h2>
          <span className="text-muted small">{cards.length} items</span>
        </div>
        <CardGrid items={cards} lang={normalizedLang} section={section} />
      </main>
    </div>
  )
}

export default CategoryPage

