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
    const value = e.target.value;
    setInputValue(value);

    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedValue]);
      setInputValue(''); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={{ padding: '5px', fontSize: '16px', width: '150px' }}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
