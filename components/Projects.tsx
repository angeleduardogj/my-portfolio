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
  const technologies = ['Express', 'MongoDB', 'Next.js', 'Node.js', 'PostgreSQL', 'React', 'Redis', 'Rust', 'V8']
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<(typeof images)[0] | null>(null)

  const images = [
    {
      id: 1,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "travel",
      techs: ['React', 'Next.js', 'PostgreSQL', 'MongoDB'],
      name: "travelab.mx",
      description: "This project is a CRM for travel agents, designed to optimize client, booking, and service management in the tourism sector. The platform allows travel agents to organize and automate key processes, such as client tracking, itinerary management, and payment administration.\n\nWith a focus on efficiency, the CRM streamlines communication with clients, providing a smoother and more satisfactory experience. Additionally, it offers tools to generate reports, conduct sales analysis, and improve strategic decision-making, helping agents maximize productivity and provide better customer service.",
      url:'',
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/drotzbucj/image/upload/v1733905656/angeleduardogj-dev/tmhru7elngyccworzi3y.png",
      alt: "logistic",
      techs: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
      name: "logisoft.mx",
      description: "This project focuses on logistics and fleet management, providing a platform that covers both transportation management and logistics in companies. It allows real-time monitoring and optimization of vehicle fleets while also improving efficiency in inventory management, product movement, and operational coordination within the company.\n\nWith a focus on automation, data analysis, and resource optimization, the system helps reduce costs, improve safety, and ensure more agile and efficient logistics, both for transportation and operations in the company.",
      url:'',
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/drotzbucj/image/upload/v1733905660/angeleduardogj-dev/ylcsoe1ll9dvfqcwoefu.png",
      alt: "marketing",
      techs: ['React', 'Next.js','Redis'],
      name: "ecards.card",
      description: "This project is a platform for ecards, digital business cards created as micro-templates. Each card is designed to be minimalist, interactive, and adaptable, allowing users to share their information in a modern and professional way.\n\nWith a focus on simplicity and customization, the ecards can be generated quickly, offering a practical and sustainable alternative to physical business cards.",
      url:'https://ecards-three.vercel.app/',
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/drotzbucj/image/upload/v1733906337/angeleduardogj-dev/bktnao5x9kacaaovot6v.png",
      alt: "developer tools",
      techs: ['Rust', 'V8'],
      name: "jsruntime.dev",
      description: "This project is a research initiative focused on creating a JAVASCRIPT runtime developed in RUST and powered by the V8 engine. The combination of RUST and V8 provides a solid and efficient approach, making this runtime a valuable tool for learning and a contribution to the JAVASCRIPT community.",
      url:'',
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/drotzbucj/image/upload/v1733905665/angeleduardogj-dev/j5kmlbm8xm2kiqon0bao.png",
      alt: "landing page",
      techs: ['Next.js'],
      name: "lucynunez.design",
      description: "Portfolio website for a graphic designer, showcasing her work and services. The site is designed to be clean, modern, and user-friendly, allowing visitors to easily navigate through the different sections and view the designer's projects.\n\nWith a focus on visual appeal and functionality, the website aims to highlight the designer's skills and creativity, providing a platform to attract potential clients and collaborators.",
      url:'',
    },

  ]

  // const toggleTech = (tech: string) => {
  //   setSelectedTechs(prev => {
  //     const newSelectedTechs = prev.includes(tech)
  //       ? prev.filter(t => t !== tech)
  //       : [...prev, tech]
  //     return newSelectedTechs
  //   })
  // }

  // const filteredImages = images.filter(image =>
  //   selectedTechs.length === 0 || selectedTechs.some(tech => image.techs.includes(tech))
  // )

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => {
      const newSelectedTechs = prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
      return newSelectedTechs
    })
  }
  
  const filteredImages = images.filter(image =>
    selectedTechs.length === 0 || selectedTechs.every(tech => image.techs.includes(tech))
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
            className={`flex items-center justify-center p-2 rounded-lg border transition-colors duration-200 cursor-pointer ${selectedTechs.includes(tech)
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
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${selectedProject?.id === image.id
                ? `${themeColors.background} bg-opacity-90`
                : `bg-opacity-0 group-hover:bg-opacity-75 ${theme === 'light'
                  ? 'group-hover:bg-gray-100'
                  : 'group-hover:bg-gray-800'
                }`
              }`}>
              <h3 className={`text-center text-lg font-semibold px-4 mb-2 transition-opacity duration-300 text-black dark:text-white ${selectedProject?.id === image.id
                  ? themeColors.text
                  : `${themeColors.text} opacity-0 group-hover:opacity-100`
                }`}>
                {image.name}
              </h3>
              <div className={`flex flex-wrap justify-center gap-2 transition-opacity duration-300 ${selectedProject?.id === image.id
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

