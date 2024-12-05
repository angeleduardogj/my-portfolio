'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'darkMode': 'Dark Mode',
    'lightMode': 'Light Mode',
    'aboutMe': 'About me',
    'aboutMeContent': 'Frontend developer with 4 years of experience. In web and mobile projects.',
    'experience': 'Experience',
    'myProjects': 'My Projects',
    'latest': 'Latest',
    'experienceItem1Title': 'Fullstack developer',
    'experienceItem1Work': 'Ez Travel',
    'experienceItem1Date': '2023 - Present',
   'experienceItem1Description':'Full stack development for a travel agency. Responsible for the development and maintenance of various modules in an organizational CRM system, utilizing technologies such as HTML, CSS, JavaScript (jQuery), Kendo UI, C# .NET, and SQL. A key contribution was migrating the CRM to React to improve performance and user experience.',
    
   'experienceItem2Title': 'Project engineer', 
    'experienceItem2Work': 'Pinnacle Aerospace',
    'experienceItem2Date': '2022 - 2023',
    'experienceItem2Description': 'Frontend development for a company focused on aircraft manufacturing. Involved in developing several modules for the web interface, enabling interaction with a flight data management unit. Technologies used included React and various libraries. The main task was refactoring the project, as it was large. The RAD (Rapid Application Development with Code Generation) methodology was implemented, creating reusable components still in use throughout the project.',
    
    'experienceItem3Title': 'Software engineer',
    'experienceItem3Work': 'Didcom',
    'experienceItem3Date': '2021 - 2022',
    'experienceItem3Description': 'Mobile development for a fleet management platform. Contributed to establishing the mobile application development department and participated in the creation of two real-time unit tracking applications. One was aimed at passenger and cargo transportation companies, and the other focused on school transport. Technologies used included React Native and various libraries, with both applications developed for Android and iOS.',
  },
  es: {
    'darkMode': 'Modo Oscuro',
    'lightMode': 'Modo Claro',
    'aboutMe': 'Sobre mí',
    'aboutMeContent': 'Desarrollador frontend con 4 años de experiencia. En proyectos web y móviles.',
    'experience': 'Experiencia',
    'myProjects': 'Mis Proyectos',
    'latest': 'Más reciente',
    
    'experienceItem1Title': 'Full stack developer',
    'experienceItem1Work': 'Ez Travel',
    'experienceItem1Date': '2023 - Presente',
    'experienceItem1Description': 'Desarrollo full stack para una agencia de viajes. Responsabilidad en el desarrollo y mantenimiento de diversos módulos en un sistema CRM organizacional, utilizando tecnologías como HTML, CSS, JavaScript (jQuery), Kendo UI, C# .NET y SQL. Una contribución clave fue la migración del CRM a React para mejorar el rendimiento y la experiencia del usuario.',
    
    'experienceItem2Title': 'Project engineer', 
    'experienceItem2Work': 'Pinnacle Aerospace',
    'experienceItem2Date': '2022 - 2023',
    'experienceItem2Description': 'Desarrollo frontend para una empresa enfocada en la manufactura de aeronaves. Se desarrollaron varios módulos para la interfaz web, facilitando la interacción con una unidad de gestión de datos de vuelos. Las tecnologías utilizadas incluyeron React y diversas bibliotecas. La tarea principal fue refactorizar el proyecto, ya que era bastante grande. Se implementó la metodología RAD (Desarrollo Rápido de Aplicaciones con Generación de Código), creando componentes reutilizables que aún se utilizan en el proyecto.',
    
    'experienceItem3Work': 'Didcom',
    'experienceItem3Title': 'Software engineer',
    'experienceItem3Date': '2021 - 2022',
    'experienceItem3Description': 'Desarrollo móvil para una plataforma de gestión de flotas de vehículos. Se contribuyó a establecer el departamento de desarrollo de aplicaciones móviles y se participó en la creación de dos aplicaciones para el seguimiento en tiempo real de unidades. Una de ellas estaba dirigida a empresas de transporte de pasajeros y carga, y la otra se enfocaba en el transporte escolar. Las tecnologías utilizadas incluyeron React Native y diversas bibliotecas, con ambas aplicaciones desarrolladas para Android e iOS.',
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

