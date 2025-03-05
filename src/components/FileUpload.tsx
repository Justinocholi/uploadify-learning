
import React from 'react';
import { Card } from './ui/card';

const FileUpload = () => {
  return (
    <Card className="p-6 sm:p-8 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm border shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Instantly Convert Your Course into an Engaging Experience
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center">
        <div className="flex justify-center mb-4 space-x-4">
          <img src="/lovable-uploads/c77277c0-dbef-4c76-a616-3a6d173b5c24.png" alt="Word Document" className="w-8 h-8 object-contain" />
          <img src="/lovable-uploads/dc92b6b4-7369-4975-8019-a406753e0929.png" alt="PowerPoint" className="w-8 h-8 object-contain" />
          <img src="/lovable-uploads/48a2f8cc-e0a7-4db4-83f5-af7afdda7867.png" alt="PDF" className="w-8 h-8 object-contain" />
        </div>
        <p className="text-gray-600 mb-4">Drag & drop your files here</p>
        <p className="text-sm text-gray-500">or</p>
        <div className="mt-4 relative">
          <input 
            type="text"
            placeholder="Paste URL to Course Material"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
          />
          <img 
            src="/lovable-uploads/51dd67a5-2216-4dee-ba87-fa9715a3f8c6.png" 
            alt="URL Icon" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 object-contain"
          />
        </div>
      </div>
    </Card>
  );
};

export default FileUpload;
