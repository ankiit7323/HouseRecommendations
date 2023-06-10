import React from 'react';
import './App.css';
import HousingLayout from './HousingLayout';
import HouseRecommendation from './HouseRecommendation';
function App() {
  const layout = [
    [null, 'Restaurant', null],
    [null, 'House', 'Gym'],
    ['Hospital', null, 'Restaurant']
  ];

  return (
    <div>
    <HousingLayout layout={layout} />
    <HouseRecommendation layout={layout} />
  </div>
  );
}

export default App;
