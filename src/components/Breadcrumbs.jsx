import { sectionLabels } from '../config/routesConfig.js'

const Breadcrumbs = ({ lang, section, page, pageTitle, availablePages = [] }) => {
  const sectionLabel = sectionLabels[section]?.[lang] || section
  const defaultPage = availablePages[0] || 'open-source'

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
        <li className="breadcrumb-item">
          <a className="link-body-emphasis" href="/">
            <span className="visually-hidden">Home</span>
            <span aria-hidden="true">🏠</span>
          </a>
        </li>
        <li className="breadcrumb-item">
          <a
            className="link-body-emphasis fw-semibold text-decoration-none"
            href={`/${lang}/${section}/${defaultPage}`}
          >
            {sectionLabel}
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {pageTitle || page}
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs

