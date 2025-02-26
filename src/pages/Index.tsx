
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FileUpload from '../components/FileUpload';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-learnly-gray">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Upload your content
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/30ec168d-fd4b-4cca-a5c4-c4c91479101c.png"
                alt="Content upload illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <FileUpload />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Discover Your Learning Personality
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Take our quick personality test to find out which learning method suits you best. 
                We've got the perfect gamification style for all personalities.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
                Start the Test
              </Button>
            </div>
            <div className="mt-8 lg:mt-0">
              <img 
                src="/lovable-uploads/77146624-1023-4db5-b459-427989767b70.png"
                alt="Learning personality illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
            Join 8,500+ people growing with LearnlyApp
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Read success stories from our community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4">
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Designed for everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-learnly-light rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Students</h3>
              <p className="text-gray-600 mb-6">
                Master complex topics faster with interactive, gamified lessons designed to boost retention and engagement.
              </p>
              <img 
                src="/lovable-uploads/ed8eaf4a-472a-442e-b519-ed93b07cd2a8.png"
                alt="Student"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-learnly-purple rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Educators</h3>
              <p className="text-white/90 mb-6">
                Transform your content into dynamic, bite-sized learning experiences that keep students engaged and improve learning outcomes.
              </p>
              <img 
                src="/lovable-uploads/8f32630b-1fbd-46cb-81d6-9c96224499c6.png"
                alt="Educator"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const testimonials = [
  {
    content: "As a course creator, engaging students was my biggest challenge. This AI tool transformed my lessons into fun, interactive games—my students love it!",
    name: "John Martinez",
    role: "Online Course Creator"
  },
  {
    content: "My training sessions are now much more engaging. The platform's gamified styles have changed the way my learners absorb information.",
    name: "Melissa O'Connor",
    role: "Independent Educator"
  },
  {
    content: "I introduced this tool to my students, and they are obsessed with the gamified learning features! It's a game-changer for educators.",
    name: "Emily Johnson",
    role: "High School Teacher"
  }
];

export default Index;
