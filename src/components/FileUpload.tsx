
import React from 'react';
import { Card } from './ui/card';

const FileUpload = () => {
  return (
    <Card className="p-8 max-w-2xl mx-auto mt-12 bg-white/50 backdrop-blur-sm border shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Instantly Convert Your Course into an Engaging Experience
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4 space-x-2">
          <img src="/pdf-icon.svg" alt="PDF" className="w-8 h-8" />
          <img src="/ppt-icon.svg" alt="PPT" className="w-8 h-8" />
          <img src="/doc-icon.svg" alt="DOC" className="w-8 h-8" />
        </div>
        <p className="text-gray-600 mb-4">Drag & drop your files here</p>
        <p className="text-sm text-gray-500">or</p>
        <input 
          type="text"
          placeholder="Paste URL to Course Material"
          className="mt-4 w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
    </Card>
  );
};

export default FileUpload;
