import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/MainDash';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-900 text-white">
      <Sidebar />
      <MainDash />
    </div>
  );
};

export default DashboardPage;
