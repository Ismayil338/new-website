import windowsApps from '../../data/WindowsApps.json'
import androidApps from '../../data/AndroidApps.json'
import isoFiles from '../../data/ISO-files.json'
import pageTitles from '../../data/page_titles.json'

export const sectionPages = {
  windows: ['open-source', 'archive', 'forwin8', 'not-in-winget', 'proprietary'],
  android: ['open-source', 'archive-open', 'archive-prop', 'proprietary'],
  'iso-files': ['win-english', 'win-russian', 'win-beta', 'ms-office', 'vmware-tools'],
}

export const sectionLabels = {
  windows: { en: 'Windows', ru: 'Windows' },
  android: { en: 'Android', ru: 'Android' },
  'iso-files': { en: 'ISO files', ru: 'ISO-файлы' },
}

export const dataMap = {
  windows: windowsApps,
  android: androidApps,
  'iso-files': isoFiles,
}

export const titlesMap = pageTitles

export const fallbackRoute = '/en/windows/open-source'

