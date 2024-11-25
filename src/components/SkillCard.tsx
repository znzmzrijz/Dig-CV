import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const SkillCard = ({ title, skills, icon: Icon }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Icon className="text-accent-blue w-6 h-6" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;