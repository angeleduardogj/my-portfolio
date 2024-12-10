import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../utils/colors'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    name: string
    src: string
    alt: string
    techs: string[]
    description: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const themeColors = colors[theme]

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className={`bg-gray-900 relative rounded-lg shadow-xl max-w-2xl w-full mx-auto`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t ${themeColors.border}`}>
          <h3 id="modal-title" className={`text-xl font-semibold ${themeColors.text}`}>
            {project.name}
          </h3>
          <button
            type="button"
            className={`${themeColors.muted} bg-transparent ${themeColors.hover} rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-colors duration-200`}
            onClick={onClose}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className={`text-base leading-relaxed ${themeColors.muted}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, index) => (
              <span 
                key={index} 
                className={`px-2 py-1 rounded-full text-sm transition-colors duration-200 ${themeColors.tag.background} ${themeColors.tag.text} ${themeColors.tag.hover}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={`flex items-center p-4 md:p-5 border-t rounded-b ${themeColors.border}`}>
          <button
            onClick={onClose}
            type="button"
            className={`${themeColors.muted} ${themeColors.background} ${themeColors.hover} focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border ${themeColors.border} text-sm font-medium px-5 py-2.5 transition-colors duration-200`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

