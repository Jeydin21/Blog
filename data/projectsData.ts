interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Munchyroll',
    description: `A simple and fast anime streaming website made in NextJS. The reason I made this was to figure out a way to watch anime while stuck at home`,
    href: 'blog/munchyroll',
  },
  {
    title: 'Calculator App',
    description: `A web app made with HTML, TailwindCSS, and Javascript to bring users a functioning calculator that has 2 themes and responsive design.`,
    href: 'https://github.com/Jeydin21/Calculator-App',
  },
  {
    title: 'Crypto Comparer',
    description: `Tracking cryptocurrencies in a Flask web app. This was a project done by high school students`,
    href: 'blog/crypto-comparer',
  }
]

export default projectsData
