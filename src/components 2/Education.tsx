"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-custom border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-dark">{edu.school}</h3>
                  <p className="text-primary font-bold">{edu.degree}</p>
                </div>
                {edu.gpa && (
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-black">
                    GPA: {edu.gpa}
                  </div>
                )}
              </div>
              
              <div className="flex justify-between text-sm text-slate-400 mb-6 font-bold uppercase tracking-tight">
                <span>{edu.location}</span>
                <span>{edu.duration}</span>
              </div>

              {edu.courses && (
                <div>
                  <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest mb-3">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIndex) => (
                      <span key={cIndex} className="text-sm text-secondary bg-light px-3 py-1 rounded-md border border-slate-100 font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
