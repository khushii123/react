import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {inputValue !== '' ?
       (
        <p> {inputValue}</p>
      ) : (
        <p>Please enter something.</p>
      )

      }
      {/* Best practice*/ }
<p>{inputValue ? `You entered: ${inputValue}` : "Not added anything"}</p>    </div>
  );
};

export default InputBox;
