'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import Image from 'next/image'
import { ProjectModal } from './ProjectModal'
import { colors } from '../utils/colors'

export default function Projects() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const technologies = ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL','MongoDB']
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<(typeof images)[0] | null>(null)

  const images = [
    { id: 1, 
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", 
      alt: "Stacked cosmetic bottles", 
      techs: ['React', 'Next.js', 'Node.js','Express','PostgreSQL','MongoDB'], 
      name: "travelab.mx", 
      description: "An e-commerce platform for eco-friendly cosmetics, built with React and Node.js." },
      { id: 2, 
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", 
        alt: "Stacked cosmetic bottles", 
        techs: ['React', 'Next.js', 'Node.js','Express','PostgreSQL','Redis'], 
        name: "logisoft.mx", 
        description: "An e-commerce platform for eco-friendly cosmetics, built with React and Node.js." },
        { id: 3, 
          src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", 
          alt: "Stacked cosmetic bottles", 
          techs: ['React', 'Next.js','PostgreSQL'], 
          name: "ecards.card", 
          description: "An e-commerce platform for eco-friendly cosmetics, built with React and Node.js." },


  ]

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => {
      const newSelectedTechs = prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
      return newSelectedTechs
    })
  }

  const filteredImages = images.filter(image => 
    selectedTechs.length === 0 || selectedTechs.some(tech => image.techs.includes(tech))
  )

  const themeColors = colors[theme]

  return (
    <div className="mb-12">
      <h2 className={`text-2xl font-bold mb-4 ${themeColors.text}`}>{t('myProjects')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`flex items-center justify-center p-2 rounded-lg border transition-colors duration-200 cursor-pointer ${
              selectedTechs.includes(tech) 
                ? theme === 'light'
                  ? 'bg-gray-100 text-gray-900 border-gray-200'
                  : 'bg-gray-700 text-white border-gray-700' 
                : theme === 'light'
                  ? 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  : 'text-gray-400 border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white'
            }`}
            aria-pressed={selectedTechs.includes(tech)}
          >
            <span className="text-sm font-medium">{tech}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer bg-white dark:bg-gray-800"
            onClick={() => setSelectedProject(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
              selectedProject?.id === image.id
                ? `${themeColors.background} bg-opacity-90`
                : `bg-opacity-0 group-hover:bg-opacity-75 ${
                    theme === 'light' 
                      ? 'group-hover:bg-gray-100' 
                      : 'group-hover:bg-gray-800'
                  }`
            }`}>
              <h3 className={`text-center text-lg font-semibold px-4 mb-2 transition-opacity duration-300 ${
                selectedProject?.id === image.id
                  ? themeColors.text
                  : `${themeColors.text} opacity-0 group-hover:opacity-100`
              }`}>
                {image.name}
              </h3>
              <div className={`flex flex-wrap justify-center gap-2 transition-opacity duration-300 ${
                selectedProject?.id === image.id
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}>
                {image.techs.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded transition-colors duration-200 ${themeColors.tag.background} ${themeColors.tag.text} ${themeColors.tag.hover}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  )
}

