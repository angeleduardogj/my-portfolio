import { useTheme } from '../contexts/ThemeContext'
import { colors } from '../utils/colors'

export default function Profile() {
  const { theme } = useTheme()
  const themeColors = colors[theme]

  return (
    <div className="mb-8">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="text-center md:text-left md:flex-1 md:order-1">
          <h1 className={`text-3xl font-bold ${themeColors.muted} mb-2`}>
            Angel Eduardo Gaxiola Javier
          </h1>
          <p className={`text-xl ${themeColors.muted} mb-4`}>
            Fullstack developer.<br/>
            Master of science in computer science.<br/>
            Computer system engineering.<br/>
          </p>
          <p className={`text-sm ${themeColors.muted} mb-4 flex items-center justify-center md:justify-start`}>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Sonora, Mexico
          </p>
          
          <div className="flex justify-center md:justify-start space-x-2">
  {[{type:'email', url:'mailto:angeleduardogj@gmail.com'}, {type:'linkedin', url:'https://www.linkedin.com/in/angeleduardogj/'},{type:'github', url:'https://github.com/angeleduardogj'}].map(({ type, url }) => (
    <a
      key={type}
       href={url}
      target="_blank"
      className="text-gray-500 hover:text-white transition-colors duration-200"
    >
      <span className="sr-only">{type}</span>
      <SocialIcon type={type} />
    </a>
  ))}
</div>


        </div>
      </div>
    </div>
  )
}

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'email':
      return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    case 'linkedin':
      return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path></svg>
    case 'github':
      return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path></svg>
  }
}

