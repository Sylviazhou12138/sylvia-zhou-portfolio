import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Sylviazhou12138', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sylviazhou0508', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sylviazhou12138@gmail.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-3xl font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Sylvia Zhou
            </span>
          </motion.div>
          <p className="text-gray-400 mb-8 text-center max-w-md">
            From brief to build.
          </p>
          
          <div className="flex items-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-300 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 w-full pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} Sylvia Zhou
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
