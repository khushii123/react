import { useState } from "react";
import Message from "./Child";

const ButtonGroup = () => {
    const [textColor, setTextColor] = useState("black");
  
    const handleButtonClick = (color) => {
      setTextColor(color);
    };
  
    return (
      <div>
        <button onClick={() => handleButtonClick("red")}>Red</button>
        <button onClick={() => handleButtonClick("green")}>Green</button>
        <button onClick={() => handleButtonClick("blue")}>Blue</button>
        <Message textColor={textColor} />
      </div>
    );
  };
  
  export default ButtonGroup;
