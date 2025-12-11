import { sectionLabels } from '../config/routesConfig.js'

const navLinks = [
  {
    section: 'windows',
    page: 'open-source',
    label: { en: 'Apps for Windows', ru: 'Приложения для Windows' },
  },
  {
    section: 'android',
    page: 'open-source',
    label: { en: 'Apps for Android', ru: 'Приложения для Android' },
  },
  {
    section: 'iso-files',
    page: 'win-english',
    label: { en: 'ISO files', ru: 'ISO-файлы' },
  },
]

const Header = ({ lang = 'en', section, page }) => {
  const otherLang = lang === 'ru' ? 'en' : 'ru'
  const switchPath =
    section && page ? `/${otherLang}/${section}/${page}` : `/${otherLang}/windows/open-source`

  return (
    <header className="bg-white border-bottom">
      <div className="container py-3 position-relative">
        <a
          href={switchPath}
          className="btn btn-outline-primary btn-sm position-absolute end-0 top-50 translate-middle-y"
        >
          {lang === 'en' ? '🇷🇺 Русский' : '🇬🇧 English'}
        </a>

        <div className="d-flex justify-content-center">
          <ul className="nav nav-pills">
            {navLinks.map((item) => (
              <li className="nav-item" key={item.section}>
                <a
                  href={`/${lang}/${item.section}/${item.page}`}
                  className={`nav-link ${section === item.section ? 'active' : ''}`}
                >
                  {item.label[lang] || sectionLabels[item.section]?.[lang] || item.section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

