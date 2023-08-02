import React, { useState } from "react";
import Childcomp from "./ChilduseEffect"; // Make sure to use the correct file path and file name

const ParentUseEffect = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      {counter > 0 && (
        <>
          <Childcomp />
          <Childcomp />
          <Childcomp />
        </>
      )}

      <Childcomp />
      <Childcomp />
    </div>
  );
};

export default ParentUseEffect;
