
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Turn your{' '}
            <div className="inline-flex flex-col h-[1.2em] overflow-hidden">
              <div className="animate-text-slide">
                <span className="text-learnly-purple block">pdf</span>
                <span className="text-learnly-purple block">ppt</span>
                <span className="text-learnly-purple block">docs</span>
              </div>
            </div>
            <br />
            into interactive learning.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Upload your course contents and let LearnlyAI transform them into engaging, gamified experiences 
            that captivate learners and boost retention.
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">
            Get Started Now
          </Button>
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/736c912b-fa78-4793-af2c-62dd44d0f426.png"
            alt="Student learning"
            className="w-full h-auto rounded-lg shadow-xl animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
