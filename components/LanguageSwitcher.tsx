'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
      className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}

