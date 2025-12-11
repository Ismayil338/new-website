const getLocalizedTitle = (item, lang) => {
  if (lang === 'ru' && item['title-ru']) return item['title-ru']
  return item.title || ''
}

const CardGrid = ({ items = [], lang = 'en', section }) => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
    {items.map((item, index) => {
      const isInternalLink = typeof item.link === 'string' && item.link.endsWith('#')
      const target = isInternalLink
        ? `/${lang}/${section}/${item.link.replace('#', '')}`
        : item.link

      const title = getLocalizedTitle(item, lang)
      const imageSrc =
        item.image && item.image.trim().length > 0
          ? item.image
          : 'https://via.placeholder.com/100?text=No+Image'

      return (
        <div className="col" key={`${item.link}-${index}`}>
          <a
            href={target}
            target={isInternalLink ? '_self' : '_blank'}
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 shadow-sm d-flex align-items-center pt-3">
              <img
                src={imageSrc}
                className="card-img-top mx-auto d-block card-image"
                alt={title}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{title}</h5>
              </div>
            </div>
          </a>
        </div>
      )
    })}
  </div>
)

export default CardGrid

