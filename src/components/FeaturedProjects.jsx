import { 
  FaGithub,
  FaLink
} from "react-icons/fa6";
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Saber-Chan',
    description: 'A multipurpose discord-bot made with typescript and sapphirejs',
    tags: ['nextjs', 'typescript', 'bot'],
    repoLink: 'https://github.com/',
    url: 'https://paul.is-a.dev'
  },
  {
    name: 'Saber-Chan',
    description: 'A multipurpose discord-bot made with typescript and sapphirejs',
    tags: ['nextjs', 'typescript', 'bot'],
    repoLink: 'https://github.com/',
    url: 'https://paul.is-a.dev'
  },
  {
    name: 'Saber-Chan',
    description: 'A multipurpose discord-bot made with typescript and sapphirejs',
    tags: ['nextjs', 'typescript', 'bot'],
    repoLink: 'https://github.com/',
    url: 'https://paul.is-a.dev'
  }
]

export default function FeaturedProjects() {
  return (
    <section>
      <h2 className="mb-5 lg:ml-[1.05rem] text-2xl lg:text-3xl text-left font-extrabold tracking-tight text-primary whitespace-nowrap">Featured Projects 🏆</h2>
      <div className="relative flex flex-col justify-between h-full mx-auto px-0 mt-5">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div className="p-1" key={index}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
