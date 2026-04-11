import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import profileImage from '../assets/profile_new.png';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: '#FDFCFB' }}
    >
      {/* 艺术背景层 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="hidden xl:block font-black select-none leading-none"
          style={{
            position: 'absolute',
            top: '6%',
            left: '-2%',
            fontSize: '8rem',
            color: '#EEF1F7',
            opacity: 0.55,
            letterSpacing: '0.04em',
          }}
        >
          SYLVIA
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 md:gap-8">
          
          {/* 左侧：照片区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center md:justify-start overflow-visible"
          >
            <div className="relative" style={{ width: '340px', height: '453px', maxWidth: '80vw' }}>
              {/* 背卡：轻微偏移，形成卡片层次 */}
              <div
                className="absolute z-0"
                style={{
                  inset: '0',
                  borderRadius: '32px',
                  background: 'linear-gradient(145deg, #6B62A0 0%, #544B86 100%)',
                  transform: 'translate(14px, 14px) rotate(-4deg)',
                  boxShadow: '0 18px 40px rgba(84,75,134,0.28)',
                }}
              />

              {/* 主卡：照片本体 */}
              <div
                className="absolute inset-0 z-10 overflow-hidden bg-white"
                style={{
                  borderRadius: '30px',
                  border: '1px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 22px 48px rgba(17, 24, 39, 0.16)',
                }}
              >
                <img
                  src={profileImage}
                  alt="Sylvia Zhou"
                  className="w-full h-full object-cover object-center block"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(15,23,42,0.18) 0%, rgba(15,23,42,0.02) 40%, rgba(15,23,42,0) 65%)',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* 右侧：文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full text-left flex flex-col justify-center relative z-20"
            style={{ maxWidth: '560px', marginLeft: 'auto' }}
          >
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-3">
                <p className="text-lg font-bold uppercase" style={{ color: '#5C548A', letterSpacing: '0.2em' }}>
                  Introduction
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter" style={{ color: '#1A1A1A' }}>
                  SYLVIA <br />
                  <span className="relative inline-block mt-2">
                    ZHOU
                    <span className="absolute h-3 -z-10" style={{ bottom: '4px', left: 0, width: '110%', background: 'rgba(244,255,129,0.6)' }} />
                  </span>
                </h1>
              </div>

              <div className="space-y-6 max-w-lg">
                {/* Keyword line */}
                <p className="text-base font-bold tracking-widest uppercase" style={{ color: '#5C548A', letterSpacing: '0.15em' }}>
                  AI Solutions
                  <span className="mx-3 font-light opacity-40">·</span>
                  Client-Facing
                  <span className="mx-3 font-light opacity-40">·</span>
                  End-to-End
                </p>

                {/* Manifesto quote */}
                <div
                  className="rounded-2xl px-5 py-4"
                  style={{ background: 'rgba(92,84,138,0.07)' }}
                >
                  <p
                    className="text-lg sm:text-xl font-medium leading-relaxed italic"
                    style={{ color: '#3A3A3A' }}
                  >
                    <span style={{ fontSize: '1.6em', color: '#5C548A', lineHeight: 0, verticalAlign: '-0.25em', fontStyle: 'normal' }}>&ldquo;</span>
                    I turn vague client needs into AI systems that actually ship.
                    <span style={{ fontSize: '1.6em', color: '#5C548A', lineHeight: 0, verticalAlign: '-0.25em', fontStyle: 'normal' }}>&rdquo;</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Button 
                  size="lg" 
                  onClick={scrollToContact} 
                  className="text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all"
                  style={{ background: '#5C548A' }}
                >
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="flex items-center gap-5">
                  {[
                    { icon: Github, href: 'https://github.com' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/sylviazhou0508' },
                    { icon: Mail, href: 'mailto:sylviazhou12138@gmail.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-all transform hover:scale-110"
                      style={{ color: '#9CA3AF' }}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
