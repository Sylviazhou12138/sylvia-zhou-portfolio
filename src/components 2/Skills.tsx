"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Code2, Wrench, Lightbulb } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} />,
      skills: resumeData.skills.languages,
      color: "blue",
    },
    {
      title: "Tools & Software",
      icon: <Wrench size={20} />,
      skills: resumeData.skills.tools,
      color: "indigo",
    },
    {
      title: "Industry & Product",
      icon: <Lightbulb size={20} />,
      skills: resumeData.skills.industry,
      color: "amber",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-custom border border-slate-100 bg-light hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-custom flex items-center justify-center mb-6 
                ${category.color === 'blue' ? 'bg-blue-50 text-primary' : 
                  category.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                  'bg-amber-50 text-amber-600'}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-dark">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 bg-white border border-slate-200 text-secondary text-sm font-bold rounded-lg shadow-sm hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
