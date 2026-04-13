import { useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react';
import profileImage from '../assets/profile_new.png';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(rawY, [0, 1], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(rawX, [0, 1], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  });

  const glossX = useTransform(rawX, [0, 1], [10, 90]);
  const glossY = useTransform(rawY, [0, 1], [10, 90]);
  const glossBg = useMotionTemplate`radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    rawX.set(0.5);
    rawY.set(0.5);
  };

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
      {/* Decorative background text */}
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

          {/* Left: Photo with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center md:justify-start overflow-visible"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ width: '340px', height: '453px', maxWidth: '80vw', perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{
                  rotateX: prefersReducedMotion ? 0 : rotateX,
                  rotateY: prefersReducedMotion ? 0 : rotateY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Background offset card */}
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

                {/* Main photo card */}
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

                  {/* Specular gloss highlight */}
                  <motion.div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      borderRadius: '30px',
                      background: glossBg,
                      opacity: prefersReducedMotion ? 0 : 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full text-left flex flex-col justify-center relative z-20"
            style={{ maxWidth: '560px', marginLeft: 'auto' }}
          >
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#5C548A' }}>
                  AI Solutions Engineer
                </p>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter"
                  style={{ color: '#1A1A1A', fontFamily: 'var(--font-display)' }}
                >
                  SYLVIA <br />
                  <span className="relative inline-block mt-2">
                    ZHOU
                    <span
                      className="absolute h-3 -z-10"
                      style={{ bottom: '4px', left: 0, width: '110%', background: 'rgba(244,255,129,0.6)' }}
                    />
                  </span>
                </h1>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-base font-bold tracking-widest uppercase" style={{ color: '#5C548A', letterSpacing: '0.15em' }}>
                  AI Solutions
                  <span className="mx-3 font-light opacity-40">·</span>
                  Client-Facing
                  <span className="mx-3 font-light opacity-40">·</span>
                  End-to-End
                </p>

                <div className="space-y-1">
                  <span
                    className="block select-none"
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '4.5rem',
                      color: '#5C548A',
                      opacity: 0.3,
                      lineHeight: 0.75,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-xl sm:text-2xl font-semibold leading-snug"
                    style={{ color: '#1A1A1A', fontFamily: 'var(--font-display)' }}
                  >
                    I turn vague client needs into AI systems that actually ship.
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
                    { icon: Github, href: 'https://github.com/Sylviazhou12138' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/sylviazhou0508' },
                    { icon: Mail, href: 'mailto:sylviazhou12138@gmail.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all transform hover:scale-110"
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
