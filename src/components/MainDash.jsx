// MainDash.js
import React from 'react';
import DragDropBox from './DragDropBox';  // Import the DragDropBox component
import TextInput from './TextInput';  // Import the TextInput component

const MainDash = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-[1.5rem] w-full sm:w-[75%] lg:w-[85%] mx-auto">
      {/* Left Side: Drag-and-Drop Box + Text Input Field */}
      <div className="flex flex-col gap-6 sm:w-[45rem] w-full">
        {/* Drag-and-Drop Box (Replaced with DragDropBox component) */}
        <DragDropBox size="w-full h-80" position="mx-auto" />

        {/* Text Input Section (Now using TextInput component) */}
        <TextInput label="Enter Text" placeholder="Type here..." />
      </div>

      {/* Right Side: Latest Food News Section */}
      <div className="flex-1 sm:w-1/2 lg:w-72 h-80 bg-gray-800 rounded-lg p-4 overflow-y-auto">
        <h3 className="text-2xl font-semibold text-green-500 mb-4">Latest Food News</h3>
        <ul className="space-y-3 text-sm text-gray-300">
          <li>
            <a href="#" className="hover:text-green-400">
              <strong>New Vegan Trends in 2024</strong> – Explore the top plant-based foods of the year!
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              <strong>Global Food Security Crisis</strong> – How climate change is affecting food production.
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              <strong>Healthy Fast Food Options</strong> – The rise of nutritious, fast food alternatives.
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              <strong>Food Waste and Sustainability</strong> – Solutions for reducing food waste worldwide.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainDash;
