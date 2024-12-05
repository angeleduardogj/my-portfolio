'use client'
export const runtime = "edge";
import ThemeToggle from '../components/ThemeToggle'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../utils/colors'

import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

export default function Home() {
  const { theme } = useTheme()
  const themeColors = colors[theme as keyof typeof colors]

  return (
    <div className={`min-h-screen ${themeColors.background} transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-end space-x-4 mb-8">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <Profile />
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

