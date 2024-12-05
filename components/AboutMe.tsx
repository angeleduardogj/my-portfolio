'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../utils/colors'

export default function AboutMe() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const themeColors = colors[theme as keyof typeof colors]

  return (
    <div className="mb-8">
      <h2 className={`text-2xl font-bold ${themeColors.text} mb-4`}>{t('aboutMe')}</h2>
      <p className={`${themeColors.text}`}>
        {t('aboutMeContent')}
      </p>
    </div>
  )
}

