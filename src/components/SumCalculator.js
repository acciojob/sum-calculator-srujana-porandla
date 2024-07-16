import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  
  useEffect(() => {
    const calculateSum = () => {
      setTimeout(() => {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }, 0);
    };

    calculateSum();
  }, [numbers]);

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setNumbers([...numbers, parsedValue]);
      setInputValue('');
    }
  };

  // Step 2 & 5: Create input field and display sum
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum Calculator</h1>
      <form onSubmit={handleAddNumber}>
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a number" 
          style={{ padding: '5px', fontSize: '16px', width: '150px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px', fontSize: '16px' }}>Add</button>
      </form>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default SumCalculator;
