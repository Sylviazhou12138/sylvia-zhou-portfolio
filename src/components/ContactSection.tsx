import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, MessageSquare, Send, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'sylviazhou12138@gmail.com',
    link: 'mailto:sylviazhou12138@gmail.com',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'sylviazhou0508',
    link: 'https://linkedin.com/in/sylviazhou0508',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Prefer Bay Area & New York · Open to Remote',
    link: null,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:sylviazhou12138@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold" style={{ fontFamily: 'var(--font-display)' }}>Contact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open to AI engineering, forward deployed, and consulting roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-[rgba(92,84,138,0.3)] rounded-2xl h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(92,84,138,0.1)' }}>
                  <info.icon className="w-6 h-6" style={{ color: '#5C548A' }} />
                </div>
                <h3 className="text-xl mb-2 text-gray-900 font-bold">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:opacity-80 transition-opacity break-all font-medium" style={{ color: '#5C548A' }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium">
                    {info.title === 'Location'
                      ? <><span>Prefer Bay Area & New York</span><br /><span>Open to Remote</span></>
                      : info.value}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto p-8 border-2 rounded-2xl shadow-sm">
            <h3 className="text-2xl mb-6 text-center text-gray-900 font-bold flex items-center justify-center gap-2">
              <MessageSquare className="w-6 h-6" style={{ color: '#5C548A' }} />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-gray-200 focus:border-[#5C548A] rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-gray-200 focus:border-[#5C548A] rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="border-gray-200 focus:border-blue-500 resize-none rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full shadow-lg py-6 text-lg rounded-xl font-bold text-white"
              style={{ background: '#5C548A' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#4A4270')}
              onMouseLeave={e => (e.currentTarget.style.background = '#5C548A')}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
