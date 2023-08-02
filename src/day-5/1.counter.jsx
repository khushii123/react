import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  console.log("Re-Render: Counter: ", counter);

 // const onBtnClick = () => {
 //   setCounter(counter + 1);
 // };
 //<----------steal closer--------->
 //const onBtnClick = () => {
  //  setCounter(counter + 1);
   // setCounter(counter + 1);
   // setCounter(counter + 1);
   // setCounter(counter + 1);
 // };
 
 const onBtnClick = () => {
    /*    setCounter(counter + 1); // 0 + 1
    setCounter(counter + 1); // 0 + 1
    setCounter2(counter2 + 1); // 1+1
    setCounter(counter + 1); // 0 + 1
    setCounter(counter + 1); // 0 + 1
    setCounter2(counter2 + 1); // 1+1 */
    // Stale Closure example
    /*  setCounter(counter + 1); // 0 +1
    setCounter(counter + 2); // 0 + 2
    setCounter(counter + 3); // 0 +3
    setCounter(counter + 4); // 0 + 4 */

    setCounter((lastState) => {
      return lastState + 1;
    });

    setCounter((lastState) => {
      return lastState + 2;
    });

    setCounter((lastState) => {
      return lastState + 3;
    });

    setCounter((lastState) => {
      return lastState + 4;
    });

    setCounter((lastState) => lastState + 5);
  };

  

  return (
    <div>
      <p>Counter: {counter}</p>
      {/*       {onBtnClick()}*/}
      {/*       <button onClick={onBtnClick()}>Increment via Func</button>
       */}{" "}
        <button
        onClick={function () {
          onBtnClick();
        }}
      >
        Increment via Func
      </button>
      <button onClick={() => onBtnClick()}>Increment via Func</button>
      <button onClick={onBtnClick}>Increment via CB</button>
    </div>
  );
};

export default Counter;
