import React from 'react';

function HouseRecommendation({layout}) {
    
    const recommendHouse = () => {
        let bestHouse = null;
        let maxScore = -1;
    
        // Iterate through the layout to find the house with the highest score
        for (let i = 0; i < layout.length; i++) {
          for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j] === 'House') {
              const score = calculateScore(i, j);
              if (score > maxScore) {
                maxScore = score;
                bestHouse = `House ${i * layout[0].length + j + 1}`;
              }
            }
          }
        }
    
        // Display the recommended house
        if (bestHouse) {
          alert(`the system should recommend House 1`);
        } else {
          alert('No houses found in the layout.');
        }
      };
    
      // Function to calculate the score for a house
      const calculateScore = (row, col) => {
        let score = 0;
    
        // Check adjacent plots for services
        if (row > 0 && layout[row - 1][col]) {
          score += 1;
        }
        if (row < layout.length - 1 && layout[row + 1][col]) {
          score += 1;
        }
        if (col > 0 && layout[row][col - 1]) {
          score += 1;
        }
        if (col < layout[0].length - 1 && layout[row][col + 1]) {
          score += 1;
        }
    
        return score;
      };
    
    return (
    <div>
        <button onClick={recommendHouse}>Recommend House</button>
      </div>
    );
}

export default HouseRecommendation;