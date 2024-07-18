import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Use setTimeout with a delay of 0 to ensure asynchronous sum calculation
    setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0);
  }, [numbers]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedValue]);
      setInputValue(''); // Clear the input field after adding the number
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
      <button onClick={handleAddNumber} style={{ marginLeft: '10px', padding: '5px 10px', fontSize: '16px' }}>Add</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
