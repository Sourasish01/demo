import React, { useState } from 'react';
import { User } from 'lucide-react';

const Sidebar = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setListItems([...listItems, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="w-1/4 bg-gray-800 p-6 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-green-500 p-6 rounded-full">
          <User className="text-gray-900 size-10" />
        </div>
        <h2 className="mt-4 text-xl font-bold">John Doe</h2>
        <p className="text-gray-400">john.doe@example.com</p>
      </div>

      <div className="w-full mb-4">
        <h3 className="text-lg font-semibold text-green-500 mb-2">Your List</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Add item"
            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
