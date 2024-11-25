import { motion } from 'framer-motion';
import { 
  MapPin, 
  Home, 
  Briefcase, 
  Target,
  BarChart2,
  Palette,
  Code2,
  ClipboardList
} from 'lucide-react';

const Overview = () => {
  const competencies = [
    'Business Management',
    'No-Code Development',
    'Business Models',
    'UI/UX Design',
    'Branding',
    'Database / Authentication',
    'AI',
    'Payments / AI Agents / API'
  ];

  const keySkills = [
    {
      title: 'Business Management',
      icon: BarChart2,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/30'
    },
    {
      title: 'Business Models',
      icon: Palette,
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconBg: 'bg-blue-500/30'
    },
    {
      title: 'No-code Dev',
      icon: Code2,
      gradient: 'from-pink-500/20 to-red-500/20',
      iconBg: 'bg-pink-500/30'
    },
    {
      title: 'Project Management',
      icon: ClipboardList,
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-green-500/30'
    }
  ];

  return (
    <div className="space-y-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 glass-card p-1">
            <img
              src="https://i.imgur.com/AsZhxzm.png"
              alt="Anamarija Zokić"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Anamarija Zokić</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-200">
                <MapPin className="w-4 h-4 mr-2" />
                Currently: Barcelona, Spain
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 text-pink-200">
                <Home className="w-4 h-4 mr-2" />
                Originally: Dubrovnik, Croatia
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {keySkills.map((skill) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg`}
                  style={{
                    background: `linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                  }}
                >
                  <div className="px-3 py-2.5 flex items-center justify-center gap-2">
                    <div className={`${skill.iconBg} p-1.5 rounded-full flex-shrink-0`}>
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {skill.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-accent-pink" />
          <h2 className="text-2xl font-display font-bold">Professional Focus</h2>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            I seek the thrilling challenges of high-stakes environments where adrenaline flows through rapid adaptation and innovative problem-solving. My entrepreneurial passion and technical expertise enable me to spot and capitalize on hidden opportunities. The intensity of startup life drives me forward. I'm ready to fully commit to Wordware.ai and help build something revolutionary that will shape the future.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-accent-pink" />
          <h2 className="text-2xl font-display font-bold">Core Competencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card p-4 flex items-center space-x-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent-pink" />
              <span className="text-gray-200">{competency}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;