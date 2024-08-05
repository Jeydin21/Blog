import Link from 'next/link'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'

export default function Hero() {
  return (
    <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="max-w-2xl pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I&apos;m Jeydin Pham
        </h1>
        <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
          Welcome to my blog, where I ramble about random things. I am a student looking to major in
          web development in the future. In my free time, I like developing{' '}
          <Link href={'/projects'}>side projects</Link> and <Link href={'/blog'}>blogging</Link>{' '}
          about them. Have a good read!
        </h2>
      </div>
      <div className="mx-2 my-12 flex w-[300px] items-center justify-center sm:w-[400px] md:w-[550px]">
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm title="Subscribe to my newsletter!" />
          </div>
        )}
      </div>
    </div>
  )
}
