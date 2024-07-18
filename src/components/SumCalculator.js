import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = () => {
    const number = parseInt(input, 10);
      
    if (!isNaN(number)) {
      setNumbers((prevNumbers) => [...prevNumbers, number]);
    }
    
    setInput("");
  }

  useEffect(() => {
    const newSum = numbers.reduce((acc, number) => acc + number, 0);
    setSum(newSum);
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={input}
        placeholder="Enter a number"
        onChange={handleInputChange}
      />
      <button onClick={handleInputSubmit}>Add Number</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;