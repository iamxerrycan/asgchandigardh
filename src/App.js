import React from 'react';
import './App.css'; 
import LeftBox from './components/leftbox/LeftBox';
import RightBox from './components/rightbox/RightBox';

const App = () => {
  return (
    <div className="flex flex-shrink items-center justify-center h-screen bg-[#222222]">
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default App;
