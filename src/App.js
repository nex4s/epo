import React, { useState } from 'react';

const Number130 = () => {
  const [rangeValue, setRangeValue] = useState(5000);
  const [step, setStep] = useState(1);
  let n130 = [];

  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value, 10));
  };

  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value, 10);
    setStep(newStep);
    setRangeValue(prev => Math.ceil(prev / newStep) * newStep);
  };

  const increment = () => {
    setRangeValue(prev => prev + step);
  };

  const decrement = () => {
    setRangeValue(prev => prev - step);
  };

  for (let i = 0; i < rangeValue; i++) {
    n130.push(i);
  }

  function checkEvenOddPrime(number) {
    if (number < 2) {
      return [number, '#fddb3a', 'Odd (Less than 2)'];
    } else if (number === 2) {
      return [number, '#fd5e53', 'Prime (2)'];
    } else if (number % 2 === 0) {
      return [number, '#21bf73', 'Even'];
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return [number, '#fd5e53', 'Prime'];
      } else {
        return [number, '#fddb3a', 'Odd'];
      }
    }
  }

  const Squares = ({ numbers }) => {
    const numberSquares = numbers.map((nr, index) => {
      const [number, color, type] = checkEvenOddPrime(nr);
      return (
        <div
          key={index}
          style={{
            height: '65px',
            width: '65px',
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className='grid mobile:h-25 mobile:w-25 sm:h-25 sm:w-25 laptop:h-100 laptop:w-100 tablet:'
        >
          <p className='font-semibold text-2xl' style={{ color: '#fdfefe' }}>
            {number}
          </p>
        </div>
      );
    });

    return (
      <div>
        <div style={{ height: '60vh', overflow: 'auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 65px)',
              gridAutoRows: '65px',
              gap: '2px',
              placeItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'unset',
              inset: '0',
              marginTop: '50px',
            }}
            className='sm:grid-cols-4 sm:gap-1 sm:mt-1 laptop:grid-cols-4 laptop:gap-3'
          >
            {numberSquares}
          </div>
        </div>
      </div>
    );
  };

  return (
    
    <div style={{ height: '100vh', backgroundColor: '#f9f9f9' }}>
      <div className='flex flex-col items-center justify-center h-full'>
        <h2 className='pixel-font text-gray-600 text-center text-3xl mb-4'><span style={{color: '#21bf73'}}>Even</span>, <span style={{color: '#fd5e53'}}>Prime</span>, <span style={{color: '#fddb3a'}}>Odd</span> - EPO</h2>
        <p className='text-gray-600 text-center mb-4'>
          The green squares represent Even numbers, red squares for Prime numbers, and yellow squares for Odd numbers.
        </p>
        <div className='flex items-center mb-4'>
          <button onClick={decrement}>-</button>
          <input
            type='range'
            min={step}
            max={10001}
            value={rangeValue}
            step={step}
            onChange={handleRangeChange}
            className='bg-black w-64 mx-4'
          />
          <button onClick={increment}>+</button>
        </div>
        <div className='mb-4'>
          <label htmlFor='stepInput'>Step:</label>
          <input
            id='stepInput'
            type='number'
            value={step}
            onChange={handleStepChange}
          />
        </div>
        <Squares numbers={n130} />
      </div>
    </div>
  );
};

export default Number130;
