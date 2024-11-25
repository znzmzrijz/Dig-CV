import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  index: number;
}

const TimelineItem = ({ year, title, company, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex gap-4 relative"
    >
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent-pink" />
        {index !== 2 && <div className="w-0.5 h-full bg-accent-pink/30" />}
      </div>
      <div className="glass-card p-6 mb-8 flex-1">
        <div className="text-accent-pink font-bold mb-2">{year}</div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-300">{company}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;