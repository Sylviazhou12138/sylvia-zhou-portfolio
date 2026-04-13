import { Card } from './ui/card';
import { motion } from 'motion/react';

const accent = {
  card: 'rgba(92,84,138,0.05)',
  border: 'rgba(92,84,138,0.15)',
  title: '#5C548A',
  tag: 'rgba(92,84,138,0.08)',
  tagBorder: 'rgba(92,84,138,0.18)',
  tagText: '#4A4270',
};

const skillGroups = [
  {
    category: 'AI & LLM',
    skills: ['RAG Pipelines', 'LLM Integration', 'Prompt Engineering', 'Eval Frameworks', 'Agentic Workflows'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Python', 'SQL', 'R', 'Data Visualization', 'A/B Testing', 'Predictive Analytics', 'Power BI', 'Tableau'],
  },
  {
    category: 'Engineering',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'AWS', 'Azure', 'Pinecone', 'ChromaDB', 'LangChain', 'Git'],
  },
  {
    category: 'Consulting',
    skills: ['Client Discovery', 'Executive Communication', 'Structured Analysis', 'Cross-functional Coordination'],
  },
  {
    category: 'Design & PM',
    skills: ['Figma', 'Product Lifecycle', 'User Journey Mapping'],
  },
  {
    category: 'Communication',
    skills: ['English (Professional)', 'Mandarin (Native)', 'Technical Writing', 'Stakeholder Presentation', 'Executive Briefing'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold" style={{ fontFamily: 'var(--font-display)' }}>Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">What I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={skillGroups.length % 2 !== 0 && i === skillGroups.length - 1 ? 'md:col-span-2' : ''}
            >
              <Card
                className="p-6 rounded-2xl h-full"
                style={{
                  background: accent.card,
                  border: `1px solid ${accent.border}`,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: accent.title }}>{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: accent.tag,
                        color: accent.tagText,
                        border: `1px solid ${accent.tagBorder}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
