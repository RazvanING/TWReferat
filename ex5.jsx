import React, { useState, useEffect } from 'react';

// React Overview
const ReactDescription = () => {
  // Demonstrating core React features
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      const sampleData = [
        { id: 1, name: 'Componenta Dinamică' },
        { id: 2, name: 'Stare Interactivă' }
      ];
      setData(sampleData);
    };

    fetchData();
  }, []);

  // Example of a React component
  const InteractiveCounter = () => {
    return (
      <div className="p-4 bg-blue-100 rounded">
        <h2 className="text-xl font-bold mb-2">Interactive Counter</h2>
        <p>Valoare curentă: {count}</p>
        <div className="space-x-2 mt-2">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Increase
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Decrease
          </button>
        </div>
        <div className="mt-4">
          <h3>Example Data:</h3>
          <ul>
            {data.map(item => (
              <li key={item.id} className="list-disc ml-4">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">React: Technology Overview</h1>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">What is React?</h2>
        <p>
          React is a JavaScript library for building user interfaces, 
          developed by Facebook. It allows the creation of reusable components 
          that manage their own state and can be combined to build complex applications.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Main Features</h2>
        <ul className="list-disc pl-5">
          <li>Component-based</li>
          <li>Declarative rendering</li>
          <li>Efficient state management</li>
          <li>Fast updates through Virtual DOM</li>
        </ul>
      </section>

      <InteractiveCounter />
    </div>
  );
};

export default ReactDescription;
