import { resumeData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tighter mb-1 uppercase">{resumeData.name}</h3>
            <p className="text-sm text-slate-400 font-medium">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a href={`mailto:${resumeData.contact.email}`} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Email
            </a>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
