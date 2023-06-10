import React, { useState } from 'react';


function HousingLayout(){
    const [layout, setLayout] = useState([]);

    // Function to handle plot assignment
    const assignPlot = (row, col, type) => {
      // Update the layout with the assigned plot
      const updatedLayout = [...layout];
      updatedLayout[row][col] = type;
      setLayout(updatedLayout);
    };
  
    // Function to handle house assignment
    const assignHouse = (row, col, label) => {
      // Check if the plot is empty or already has a house assigned
      if (!layout[row][col] || layout[row][col] === 'House') {
        // Assign the house to the plot
        assignPlot(row, col, 'House');
        // Assign a unique label to the house
        const updatedLayout = [...layout];
        updatedLayout[row][col] = `House ${label}`;
        setLayout(updatedLayout);
      }
    };
  

    return (
        <div>
        <h2>Housing Layout</h2>
        <table>
          <tbody>
            {layout.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((plot, colIndex) => (
                  <td key={colIndex}>
                    <button onClick={() => assignHouse(rowIndex, colIndex, rowIndex * layout[0].length + colIndex + 1)}>
                      {plot || '-'}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default HousingLayout;