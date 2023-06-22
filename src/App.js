import React from "react";
import { useState } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=DynaPuff&display=swap"
  rel="stylesheet"
/>;
const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default App;
