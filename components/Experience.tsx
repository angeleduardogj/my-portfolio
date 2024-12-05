'use client'

import { Calendar,Plane,Compass, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

export default function Experience() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('experience')}</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <ExperienceItem
          title={t('experienceItem1Title')}
          icon={<Compass className="w-5 h-5"/>}
          work={t('experienceItem1Work')}
          date={t('experienceItem1Date')}
          description={t('experienceItem1Description')}
          isLatest={true}
        />
        <ExperienceItem
          title={t('experienceItem2Title')}
          icon={<Plane className="w-5 h-5"/>}
          work={t('experienceItem2Work')}
          date={t('experienceItem2Date')}
          description={t('experienceItem2Description')}
        />
        <ExperienceItem
          title={t('experienceItem3Title')}
          icon={<MapPin className="w-5 h-5"/>}
          work={t('experienceItem3Work')}
          date={t('experienceItem3Date')}
          description={t('experienceItem3Description')}
        />
      </ol>
    </div>
  )
}

function ExperienceItem({ title, date, description, work, isLatest = false, icon=<Calendar className="w-2.5 h-2.5" /> }) {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <li className="mb-10 ms-6">
      <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ${
  theme === 'light' 
    ? 'bg-gray-50 ring-white text-gray-600' 
    : 'bg-gray-700 ring-gray-900 text-gray-400'
}`}>
        {/* <Calendar className="w-2.5 h-2.5" /> */}
      {icon}
      </span>
      <h3 className="flex flex-col sm:flex-row items-start sm:items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
        {isLatest && (
          <span className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded mt-2 sm:mt-0 sm:ms-3 ${
    theme === 'light'
      ? 'bg-gray-100 text-gray-700'
      : 'bg-gray-700 text-gray-300'
  }`}>
            {t('latest')}
          </span>
        )}
      </h3>
      <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{work}</p>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      {
  Array.isArray(description) 
    ? (
        <ul className="list-disc pl-5">
          {description.map((line, index) => (
            <li key={index} className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {line}
            </li>
          ))}
        </ul>
      )
    : <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
}


    </li>
  )
}

