"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Rocket, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Rocket size={24} />
          </div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-custom overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-lg text-secondary font-medium italic">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <span className="text-sm font-bold text-slate-400">{project.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-slate-600 leading-relaxed flex gap-3">
                        <span className="text-purple-500 mt-1.5 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-light rounded-custom p-6 flex flex-col justify-center items-center border border-slate-100">
                    <p className="text-slate-400 text-sm mb-4 font-medium">Project Visual / Demo</p>
                    <div className="w-full aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center border border-slate-50">
                      <Rocket size={48} className="text-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
