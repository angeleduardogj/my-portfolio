import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../utils/colors'

export default function Header() {
  const { theme } = useTheme()
  const themeColors = colors[theme]

  return (
    <div className={`bg-${themeColors.background} text-${themeColors.text} text-center py-4 mb-8 rounded-lg`}>
      <span className="font-bold">⚠️ This page is under construction. Please check back later! ⚠️</span>
    </div>
  )
}

