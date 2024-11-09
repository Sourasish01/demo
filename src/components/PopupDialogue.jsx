import { useState } from "react";
import { motion } from "framer-motion";
import { X, Search } from "lucide-react";

const PopupDialog = ({ onClose, onSubmit, diseases }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSelectDisease = (disease) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((d) => d !== disease)
        : [...prevSelected, disease]
    );
  };

  const handleFormSubmit = () => {
    onSubmit(selectedDiseases);
    onClose();
  };

  // Filter diseases based on search query
  const filteredDiseases = diseases.filter((disease) =>
    disease.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-6'
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
            Select Diseases
          </h2>
          <button onClick={onClose} className='text-gray-400 hover:text-red-500'>
            <X size={24} />
          </button>
        </div>

        <div className='relative mb-6'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Search className='text-green-500' />
          </div>
          <input
            type='text'
            placeholder='Search Diseases...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
          />
        </div>

        <div className='max-h-60 overflow-y-auto mb-4'>
          {filteredDiseases.length > 0 ? (
            filteredDiseases.map((disease) => (
              <label
                key={disease}
                className='flex items-center space-x-3 mb-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer'
              >
                <input
                  type='checkbox'
                  checked={selectedDiseases.includes(disease)}
                  onChange={() => handleSelectDisease(disease)}
                  className='form-checkbox h-5 w-5 text-green-500'
                />
                <span className='text-white'>{disease}</span>
              </label>
            ))
          ) : (
            <p className='text-gray-400 text-center'>No diseases found</p>
          )}
        </div>

        <motion.button
          onClick={handleFormSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
        >
          Add Selected
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PopupDialog;
