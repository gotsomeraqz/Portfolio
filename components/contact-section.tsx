'use client';

import StarBorder from '@/components/StarBorder';
import { Github, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
    color: 'hover:text-gray-400'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Instagram,
    color: 'hover:text-pink-400'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com',
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: Youtube,
    color: 'hover:text-red-400'
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate or just want to say hello? I'd love to hear from you.
        </p>
        
        <div className="flex justify-center mb-12">
          <StarBorder className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media or reach out directly
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted/50 transition-all duration-300 ${link.color} hover:scale-110 hover:bg-muted`}
                      aria-label={link.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </StarBorder>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}