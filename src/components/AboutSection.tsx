import { Card } from './ui/card';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Lightbulb,
    title: 'Ambiguity → Structure',
    description: 'Turning unclear requirements into defined, actionable solutions.',
  },
  {
    icon: Heart,
    title: 'Read the Real Need',
    description: 'Identifying what clients actually need, not just what they ask for.',
  },
  {
    icon: Users,
    title: 'End-to-End Ownership',
    description: 'From requirements to deployment — problem framing, system design, and delivery.',
  },
  {
    icon: Target,
    title: 'Real Impact, Not Demos',
    description: 'Building systems that run in production, not just in presentations.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold" style={{ fontFamily: 'var(--font-display)' }}>About</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I build AI systems that ship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 space-y-5 text-lg text-gray-700 leading-relaxed"
        >
          <p>
            My background sits at the intersection of technical AI implementation and client-facing delivery. I don't just design solutions — I build them end to end, working directly with customers to understand what they actually need and shipping software that holds up in production.
          </p>
          <p>
            I work across the full stack of AI delivery: scoping use cases with clients, building and integrating LLM-powered systems, debugging when things break, and making judgment calls on when AI output is actually ready to ship. I use tools like <strong>Claude Code</strong> and <strong>Cursor</strong> not to replace my thinking, but to move faster while staying in control of the architecture.
          </p>
          <p>
            What I care about most is the gap between a working demo and something production-ready — and closing it.
          </p>
          <p>
            I'm looking for roles where building with AI tools, shipping to production, and working directly with customers is the job.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-[rgba(92,84,138,0.3)] rounded-2xl h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(92,84,138,0.1)' }}>
                  <value.icon className="w-6 h-6" style={{ color: '#5C548A' }} />
                </div>
                <h4 className="text-xl mb-2 text-gray-900 font-bold" style={{ fontFamily: 'var(--font-display)' }}>{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
