import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Luunos AI',
      description: 'Advanced AI-powered platform revolutionizing business intelligence and automation. Generate incredible images with AI using our intuitive platform.',
      link: 'https://luunos.com/',
      image: 'https://i.imgur.com/65HRdQK.png'
    },
    {
      title: 'Sensy AI',
      description: 'Your AI Buddy for mental wellness. A compassionate AI companion designed to support your mental health journey with innovative solutions for enhanced user experience.',
      link: 'https://gentle-cajeta-f5eafa.netlify.app/',
      image: 'https://i.imgur.com/J0rEN0d.png'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-display font-bold gradient-text mb-6">
          Projects & Integrations
        </h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Explore my latest projects showcasing innovative solutions in AI, business automation, and user experience design.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;