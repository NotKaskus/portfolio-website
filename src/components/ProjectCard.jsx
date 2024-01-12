import Link from 'next/link';
import { 
  FaGithub,
  FaLink
} from "react-icons/fa6";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

export default function ProjectCard({ project }) {
  return (
    <Card className='bg-background rounded-lg border p-4'>
      <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
        <CardContent className='px-1 py-1'>
            <h4 className='font-bold text-xl mb-2'>{project.name}</h4>
            <div className='flex text-amber-500'>
              <h3>In Development!</h3>
            </div>
            <p className='text-muted-foreground text-md my-2'>{project.description}</p>
            <div className="flex justify-start space-x-2 items-center mt-3 text-gray-500">
              {project.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
            <div className="flex space-x-2 pt-5">
              <Link href={project.repoLink}>
                <FaGithub className='text-2xl' />
              </Link>
              <Link href={project.url}>
                <FaLink className='text-2xl' />
              </Link>
            </div>
        </CardContent>
    </Card>
  )
}
