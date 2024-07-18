import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  // State to store the array of numbers
  const [numbers, setNumbers] = useState([]);
  // State to store the sum of numbers
  const [sum, setSum] = useState(0);

  // Function to handle user input
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      const number = parseInt(value, 10);
      // Add the new number to the array of numbers
      setNumbers((prevNumbers) => [...prevNumbers, number]);
    }
  };

  // Effect to calculate the sum of numbers whenever the numbers array changes
  useEffect(() => {
    const calculateSum = () => {
      // Calculate the sum asynchronously
      const newSum = numbers.reduce((acc, number) => acc + number, 0);
      setSum(newSum);
    };

    calculateSum();
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onClick={handleInputChange}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
