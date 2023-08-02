import { useState } from "react";
const ColorList = () => {
  const [Color, setColor] = useState("");

  const onAddColor = () => {
    // Prepend Example
    setColor((prevState) => [Color, ...prevState]);

    // Append Example
    //setNames((prevState) => [ ...prevState, newName]);

    // setNewName("");
  };

  return (
    <div>
      <div>
        <input
          type="Text"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={onAddColor}>Add</button>
      </div>
       {/* <ul>
        {Color.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>  */}
    </div>
  );
};

export default ColorList;
