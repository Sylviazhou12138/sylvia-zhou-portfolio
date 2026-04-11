import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, MessageSquare, Send, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
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
    toast.success('Message sent!', {
      description: 'Thanks for reaching out — I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold">Contact</h2>
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
              <Card className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-blue-100 rounded-2xl h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900 font-bold">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 hover:text-blue-700 transition-colors break-all font-medium"
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
              <MessageSquare className="w-6 h-6 text-blue-600" />
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
                    className="border-gray-200 focus:border-blue-500 rounded-xl"
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
                    className="border-gray-200 focus:border-blue-500 rounded-xl"
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
                className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg py-6 text-lg rounded-xl font-bold"
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
