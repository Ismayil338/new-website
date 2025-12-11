import Header from '../components/Header.jsx'

const HomePage = () => (
  <div className="app-shell">
    <Header lang="en" />
    <main className="container py-5">
      <div className="text-center">
        <h1 className="mb-3">Choose your language</h1>
        <p className="text-muted mb-4">
          Jump straight to the catalog of Windows apps in your preferred language.
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a className="btn btn-primary px-4" href="/en/windows/open-source">
            English
          </a>
          <a className="btn btn-outline-primary px-4" href="/ru/windows/open-source">
            Русский
          </a>
        </div>
      </div>
    </main>
  </div>
)

export default HomePage

