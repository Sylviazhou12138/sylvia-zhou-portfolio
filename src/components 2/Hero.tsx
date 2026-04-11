"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
import { resumeData } from "@/lib/data";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center pt-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <img
                src={resumeData.image}
                alt={resumeData.name}
                className="rounded-full object-cover w-full h-full border-4 border-slate-50 shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-dark">
              {resumeData.name}
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-6 font-medium">
              {resumeData.title}
            </p>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              {resumeData.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-slate-500 bg-light px-5 py-2.5 rounded-full border border-slate-100">
                <MapPin size={18} className="mr-2 text-primary" />
                <span className="text-sm font-medium">{resumeData.contact.location}</span>
              </div>
              <a 
                href={`mailto:${resumeData.contact.email}`}
                className="flex items-center text-slate-500 bg-light px-5 py-2.5 rounded-full border border-slate-100 hover:border-primary hover:text-primary transition-all group"
              >
                <Mail size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email Me</span>
              </a>
              <a 
                href={`https://${resumeData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-500 bg-light px-5 py-2.5 rounded-full border border-slate-100 hover:border-primary hover:text-primary transition-all group"
              >
                <Linkedin size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href="#projects"
                className="bg-primary text-white px-10 py-4 rounded-custom font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center group"
              >
                View Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
