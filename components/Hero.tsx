import Link from 'next/link'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import Github from '../components/Github'

export default function Hero() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          I'm{' '}
          <span className="dark:from-secondary-700 dark:to-secondary-400 mt-10 bg-gradient-to-r from-primary-700 to-primary-400 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Jeydin Pham
          </span>{' '}
          👋
        </h1>
        <div className="dark:text-grey text-gray mb-8 mt-4 text-base">
          <p>
            An aspiring web development major interested in component-based architecture frameworks
          </p>
          <p className="dark:text-grey text-gray mb-8 mt-4 text-sm">
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🥇 NextJS</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">❤️ React</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🛠️ Javascript</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">📚 Typescript</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">📦 NodeJS</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🐍 Python</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🧊 HTML</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🍡 CSS</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🔥 Vercel</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">📘 TailwindCSS</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🕰️ Git</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🚃 NPM</span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">🍽️ APIs</span>
          </p>
        </div>

        <Github />
      </div>
    </div>
  )
}
