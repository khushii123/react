
// Stateless
import { useRef } from "react";

const WithUseRef = () => {
  const nameInputRef = useRef(null);
  const pswrdInputRef= useRef(null);

  const onShowValue = () => {
    console.log("Name: ", nameInputRef.current.value);
  };
  const onShowpswrdValue = () => {
    console.log("Name: ", pswrdInputRef.current.value);
  };


  console.log("Re-Render: ");
  return (
    <div>
      <input ref={nameInputRef} type="text" defaultValue={"Ajit"} />
      <button onClick={onShowValue}>Show Value</button>
      <input ref={nameInputRef} type="password"  />
      <button onClick={onShowpswrdValue}>Show Value</button>
    </div>
  );
};

export default WithUseRef;
