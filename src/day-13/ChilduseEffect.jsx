import React, { useEffect } from "react";

const Childcomp = () => {
  useEffect(() => {
    console.log("First time loaded");
  }, []);

  return <div>Child comp</div>;
};

export default Childcomp;

