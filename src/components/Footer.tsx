import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/azokic/',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/anamarija-zoki%C4%87-a3232114a/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/Zokicc/?locale=hr_HR',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:ana.z.spain@gmail.com"
              className="glass-card p-6 flex items-center justify-center space-x-3 hover:border-accent-pink/50 transition-colors"
            >
              <Mail className="text-accent-pink w-6 h-6" />
              <span className="text-lg">ana.z.spain@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href="tel:+385989023426"
              className="glass-card p-6 flex items-center justify-center space-x-3 hover:border-accent-pink/50 transition-colors"
            >
              <Phone className="text-accent-pink w-6 h-6" />
              <span className="text-lg">+385 98 902 3426</span>
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass-card rounded-full ${color} transition-colors duration-300`}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;