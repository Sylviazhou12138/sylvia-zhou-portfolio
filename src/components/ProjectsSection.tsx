import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'AI Compliance Solution – Top Global Airline',
    description: 'Scoped and led the AI compliance system end to end. An AI assistant built for pilots and union reps to query complex aviation regulations and collective bargaining agreements. Unlike generic AI, every response is grounded in explicit document sources — making answers accurate, defensible, and traceable. Built on Next.js 15 App Router + Vercel AI SDK, with Drizzle ORM + PostgreSQL for session persistence and next-auth for access control.',
    tags: ['Next.js 15', 'Vercel AI SDK', 'RAG', 'PostgreSQL', 'Drizzle ORM', 'next-auth'],
    link: null,
    period: 'Jan 2025 – Present',
  },
  {
    title: 'ClaimSense – AI Insurance Claims Triage',
    description: 'Architected a full-stack claims triage pipeline using Gemini + RAG, automating risk classification, compliance checking, and document retrieval. Designed a 5-stage parallel pipeline with modular separation of concerns; containerized with Docker for reproducible deployment.',
    tags: ['Gemini', 'RAG', 'Python', 'Docker', 'Full-Stack'],
    link: 'https://github.com/Sylviazhou12138/claimsense',
    period: '2025',
  },
  {
    title: 'UIPathFinder – AI Campus Planner',
    description: 'Top 3 of 100+ projects at UIUC CS. Developed an AI campus planner that translates natural language into constraint-aware daily schedules with multi-factor visual routing. Built with Next.js + TypeScript and deployed to Vercel.',
    tags: ['Next.js', 'TypeScript', 'LLM', 'Vercel', 'AI Planning'],
    link: 'https://ui-path-finder.vercel.app/',
    period: 'Aug – Dec 2024',
  },
  {
    title: 'WonderWords – YouTube Vocab Assistant',
    description: 'Shipped a Gemini-based Chrome extension that scans YouTube videos for vocabulary and tailors word lists by the user\'s English proficiency level. End-to-end product from prompt design to Chrome Web Store submission.',
    tags: ['Gemini API', 'Chrome Extension', 'JavaScript', 'EdTech'],
    link: 'https://github.com/Sylviazhou12138/WonderWords',
    period: '2024',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Architecture to Production, End to End.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={project.link ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={project.link ? 'cursor-pointer' : 'cursor-default'}
                onClick={e => !project.link && e.preventDefault()}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col rounded-2xl">
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl mb-3 text-gray-900 font-bold group-hover:text-[#5C548A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mb-5 flex-1 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-medium"
                          style={{ borderColor: 'rgba(92,84,138,0.2)', color: '#5C548A' }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <div className="flex items-center gap-1 mt-auto text-sm font-medium" style={{ color: '#5C548A' }}>
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Project
                      </div>
                    )}
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
