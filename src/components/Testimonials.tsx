import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  const testimonials = [
    {
      text: "John is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills make him an invaluable team member.",
      author: "Sarah Johnson",
      position: "CTO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      text: "Working with John was a game-changer for our project. His attention to detail and problem-solving abilities are outstanding.",
      author: "Michael Chen",
      position: "Product Manager at InnovateLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      text: "John's technical leadership transformed our development process. His mentorship has been invaluable to our team's growth.",
      author: "Emily Rodriguez",
      position: "Lead Developer at StartupX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
            >
              <div className="bg-gray-50 p-6 rounded-lg relative">
                <Quote className="w-8 h-8 text-blue-200 absolute top-4 left-4" />
                <div className="pt-8">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}