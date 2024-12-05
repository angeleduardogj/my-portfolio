'use client'

import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { Moon, Sun } from 'lucide-react'
import { colors } from '../utils/colors'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const themeColors = colors[theme]

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md ${themeColors.background} ${themeColors.text} ${themeColors.hover} transition-colors duration-200`}
      aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}

