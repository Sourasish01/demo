import { useState } from "react";
import PopupDialog from "./PopupDialogue";

const DiseaseSelectionPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const diseasesList = [
    "Diabetes",
    "Hypertension",
    "Asthma",
    "Covid-19",
    "Cancer",
    "Malaria",
    "Influenza",
    "Tuberculosis",
  ];

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleAddDiseases = (diseases) => setSelectedDiseases(diseases);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <button
        onClick={handleOpenPopup}
        className='mb-6 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none transition duration-200'
      >
        Select Diseases
      </button>

      {isPopupOpen && (
        <PopupDialog
          onClose={handleClosePopup}
          onSubmit={handleAddDiseases}
          diseases={diseasesList}
        />
      )}

      <div className='text-white'>
        <h3 className='text-xl font-semibold mb-4'>Selected Diseases:</h3>
        {selectedDiseases.length > 0 ? (
          <ul>
            {selectedDiseases.map((disease) => (
              <li key={disease}>{disease}</li>
            ))}
          </ul>
        ) : (
          <p>No diseases selected.</p>
        )}
      </div>
    </div>
  );
};

export default DiseaseSelectionPage;

