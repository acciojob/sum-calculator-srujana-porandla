import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  const handleInputChange = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (!isNaN(parsedValue)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedValue]);
      e.target.value = ''; 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={{ padding: '5px', fontSize: '16px', width: '150px' }}
      />
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default SumCalculator;
