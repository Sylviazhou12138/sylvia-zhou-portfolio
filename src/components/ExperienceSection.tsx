import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    type: 'work',
    title: 'AI Implementation Engineer & Engagement Lead',
    company: 'iSchool Capstone · Remote / Chicago HQ',
    location: 'Remote',
    period: '2025年1月 - 至今',
    description: 'Built and deployed a RAG chatbot for a global airline; evaluated LLM outputs and validated compliance before launch.',
    achievements: [
      'Uncovered 30+ unanticipated use cases via query clustering; translated findings into an AI roadmap adopted by stakeholders',
      'Engineered onboarding pipeline mapping user profiles to AI response parameters, lifting session depth by 10%',
      'Drove adoption across four AI workflows via live demos; owned full lifecycle from client discovery to production handoff',
      'Traced RAG retrieval failures to chunk misalignment via score inspection; re-segmented corpus, improving recall by 18%',
    ],
    technologies: ['RAG', 'LLM Eval', 'LangChain', 'Pinecone', 'Python', 'Prompt Engineering'],
  },
  {
    type: 'work',
    title: 'AI Implementation Engineer',
    company: 'AI Solutions Company · Chengdu',
    location: 'Chengdu, China',
    period: '2024年1月 - 8月',
    description: 'Built internal AI tooling and knowledge infrastructure to reduce expert bottlenecks across 38 active engineering projects.',
    achievements: [
      'Codified senior engineer expertise into structured knowledge assets, reducing expert intervention by 60% per project',
      'Deployed RAG knowledge base with citation, enabling self-service operations across 38 active projects',
      'Automated fault diagnosis workflow by matching live alerts to historical cases, reducing manual triage time by 25%',
      'Implemented AI code review for embedded software, automating vulnerability detection and cutting audit time by 40%',
    ],
    technologies: ['RAG', 'Knowledge Base', 'Python', 'AI Code Review', 'Fault Diagnosis'],
  },
  {
    type: 'work',
    title: 'Business Analyst Intern',
    company: 'E-commerce Unicorn (Sequoia-backed) · Shanghai',
    location: 'Shanghai, China',
    period: '2023年5月 - 8月',
    description: 'Drove data-led product decisions to improve merchant lifecycle and conversion on a large-scale e-commerce platform.',
    achievements: [
      'Segmented 180+ merchants via ML and cohort analysis to track lifecycle, identifying key drivers for long-term retention',
      'Analyzed 300+ merchant datasets via SQL to drive a 12% lift in conversion through data-led product action items',
    ],
    technologies: ['SQL', 'Python', 'Cohort Analysis', 'A/B Testing', 'Data Visualization'],
  },
];

const education = [
  {
    type: 'education',
    degree: '信息管理硕士 (MSIM)',
    school: '伊利诺伊大学香槟分校 (UIUC)',
    location: '伊利诺伊州香槟市',
    period: '2024年9月 - 2026年5月',
    gpa: 'GPA 3.87/4.0',
    description: '专注于信息管理、数据科学和 Web 编程。',
    courses: [
      '信息咨询',
      'Web 编程',
      '数据库系统',
      '数据可视化',
      '数据仓库与商业智能',
    ],
  },
  {
    type: 'education',
    degree: '新闻与传播学士',
    school: '澳门科技大学 (MUST)',
    location: '中国澳门',
    period: '2020年9月 - 2024年5月',
    gpa: '',
    description: '学习新闻传播理论、媒体叙事和数字媒体制作。',
    courses: [
      '媒体叙事',
      '传播理论',
      '数字媒体制作',
      '新闻写作',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold">工作经历</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从数据洞察到 AI 实践的职业之路
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-blue-100 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl text-gray-900 font-bold">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-gray-500 text-sm sm:text-right font-medium">
                        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-1 inline-block">{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-gray-900 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        主要成就：
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-center mb-8 text-gray-900 font-bold">教育背景</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-indigo-100 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div>
                          <h3 className="text-2xl text-gray-900 font-bold">{edu.degree}</h3>
                          <p className="text-lg text-indigo-600 font-medium">{edu.school}</p>
                          {edu.gpa && <p className="text-emerald-600 font-bold mt-1">{edu.gpa}</p>}
                        </div>
                        <div className="text-gray-500 text-sm sm:text-right font-medium">
                          <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mb-1 inline-block">{edu.period}</div>
                          <div>{edu.location}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div>
                        <h4 className="font-bold mb-2 text-gray-900">核心课程：</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <Badge 
                              key={course} 
                              variant="outline"
                              className="border-indigo-200 text-indigo-700 font-medium"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
