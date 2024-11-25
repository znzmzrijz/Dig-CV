import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import SkillCard from '../components/SkillCard';
import { Code2, Brain, Database, Workflow } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Account Manager',
      company: 'MYCOlive - SaaS'
    },
    {
      year: '2023',
      title: 'Project Manager',
      company: 'Barcelona Vibes - Travel & Event Agency '
    },
    {
      year: '2021',
      title: 'Franchise Owner and Store Manager',
      company: 'Mail Boxes Etc. Dubrovnik'
    }
  ];

  const skillCategories = [
    {
      title: 'Development',
      icon: Code2,
      skills: [
        'No-code development tools (V0, bolt.new, Cursor)',
        'Full-stack Apps',
        'Front-end development',
        'Responsive design'
      ]
    },
    {
      title: 'Business & Strategy',
      icon: Brain,
      skills: [
        'Business Management',
        'Business Models',
        'Risk Management',
        'Problem Solving'
      ]
    },
    {
      title: 'Technical',
      icon: Database,
      skills: [
        'Database management (Firebase, Supabase)',
        'User Authentication & Authorization',
        'Payment Integration',
        'API'
      ]
    },
    {
      title: 'Marketing',
      icon: Workflow,
      skills: [
        'Branding',
        'Social Media',
        'Google Business & SEO',
        'Creative Director'
      ]
    }
  ];

  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-display font-bold gradient-text mb-8">
          Experience & Skills
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Timeline</h2>
          <div className="ml-4">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} {...item} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;