import React, { useState } from 'react';
import data from './data';

const Logic = () => {
  const [randomItems, setRandomItems] = useState([]);

  const handleButton = () => {
    // Create an array of indices (0 to data.length - 1)
    const indices = Array.from({ length: data.length }, (_, i) => i);
    // Shuffle indices and take the first 3
    const shuffled_data = indices.sort(() => Math.random() - 0.5).slice(0, 3);
    const selectedItems = shuffled_data.map(index => data[index]);
    setRandomItems(selectedItems);
  };

  return (
    <div>
      <h1>Lets Revise the Topics!!!</h1>
      <button onClick={handleButton}>Generate</button>
      <table className="table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {randomItems.map(item => (
            <tr key={item.id}>
              <td>{item.topic}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  LINK
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logic;