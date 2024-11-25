import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, User, Terminal, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const navItems = [
    { path: '/', label: 'Overview', icon: User },
    { path: '/projects', label: 'AI Projects', icon: Code2 },
    { path: '/experience', label: 'Experience & Skills', icon: GraduationCap },
    { path: '/wordware', label: 'Wordware.ai Demo', icon: Terminal },
  ];

  return (
    <header className="fixed w-full top-0 z-50 px-4 py-4 md:py-6 bg-primary-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex flex-col items-center gap-4 md:gap-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-center"
        >
          <span className="bg-gradient-to-r from-accent-pink to-primary-light bg-clip-text text-transparent">
            Anamarija
          </span>
          {" "}
          <span className="bg-gradient-to-r from-primary-light to-accent-blue bg-clip-text text-transparent">
            Zokic CV
          </span>
        </motion.h1>

        <nav className="glass-card px-2 py-1 rounded-full w-full max-w-3xl">
          <div className="flex items-center justify-between md:justify-center space-x-1 md:space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-item text-sm md:text-base ${
                  location.pathname === path ? 'bg-white/20 text-accent-pink' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{label}</span>
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="nav-item text-sm md:text-base text-red-400 hover:text-red-300"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;