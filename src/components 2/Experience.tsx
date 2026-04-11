"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-50 text-primary rounded-xl">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-100"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                  <p className="text-lg font-medium text-primary">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="inline-block px-3 py-1 bg-light text-secondary text-sm rounded-full font-bold">
                    {exp.duration}
                  </span>
                  <p className="text-sm text-slate-400 mt-1 font-medium">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-slate-600 leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
