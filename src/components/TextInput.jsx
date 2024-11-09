import React, { useState, useRef } from 'react';
import { Mic, Camera } from 'lucide-react'; // Import the Camera icon for the photo button

const TextInput = ({ label, placeholder, onCapture }) => {
  const [inputText, setInputText] = useState(''); // State to hold the text input
  const [capturedImage, setCapturedImage] = useState(null); // State to store captured image preview
  const videoRef = useRef(null); // Reference to the video element
  const canvasRef = useRef(null); // Reference to the canvas element
  const [isCameraOpen, setIsCameraOpen] = useState(false); // To track if the camera is opened

  // Function to start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraOpen(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera, GIVE PERMISSION');
    }
  };

  // Function to capture the photo
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');

    // Set the captured image for preview
    setCapturedImage(dataUrl);

    // Pass the captured image to the parent component (DragDropBox)
    onCapture(dataUrl);
    stopCamera();
  };

  // Function to stop the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setIsCameraOpen(false);
  };

  return (
    <div className="mt-8 w-full">
      <label className="block mb-2 text-sm font-medium text-green-500">{label}</label>
      <div className="flex items-center border rounded-lg border-gray-700 bg-gray-800 px-4 py-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Update state as user types
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
        <button className="ml-2 p-2 rounded-full text-green-500 hover:text-green-400 transition duration-200">
          <Mic />
        </button>
        <button
          className="ml-2 p-2 rounded-full text-green-500 hover:text-green-400 transition duration-200"
          onClick={startCamera}
        >
          <Camera />
        </button>
        {isCameraOpen && (
          <button
            className="ml-2 p-2 rounded-full text-green-500 hover:text-green-400 transition duration-200"
            onClick={capturePhoto}
          >
            Capture
          </button>
        )}
      </div>
      <video ref={videoRef} className="hidden"></video>
      <canvas ref={canvasRef} className="hidden"></canvas>

      {/* Show the preview of the captured image */}
      {capturedImage && (
        <div className="mt-4">
          <h3 className="text-green-400 font-medium">Captured Image Preview:</h3>
          <img src={capturedImage} alt="Captured" className="w-64 h-64 object-cover rounded-lg mx-auto" />
        </div>
      )}
    </div>
  );
};

export default TextInput;
