import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

const MainDash = () => {
  const [file, setFile] = useState(null);
  const [inputText, setInputText] = useState('');

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex-1 p-6">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-48 border-2 border-dashed border-gray-700 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200"
      >
        {file ? (
          <p className="text-green-400">{file.name}</p>
        ) : (
          <p className="text-gray-400">Drag and drop an image, or click to select</p>
        )}
      </div>

      <div className="mt-8">
        <label className="block mb-2 text-sm font-medium text-green-500">Enter Text</label>
        <div className="flex items-center border rounded-lg border-gray-700 bg-gray-800 px-4 py-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type here..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />
          <button className="ml-2 p-2 rounded-full text-green-500 hover:text-green-400 transition duration-200">
            <Mic />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainDash;
