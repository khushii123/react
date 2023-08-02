import React, { useRef, useState } from 'react';

const OtpGenerator = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;

    if (event.target.value === '' || !isNaN(event.target.value)) {
      setOtp(newOtp);

      if (event.target.value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <div>
      <div className="otp-boxes">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="password"
            value={digit}
            ref={inputRefs[index]}
            maxLength="1"
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpGenerator;
