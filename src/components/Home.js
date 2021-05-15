import React, { useState } from "react";

const Home = ({ details }) => {
  const [data, setData] = useState("");
  let textInput = React.createRef();

  let onOnclickHandler = (e) => {
    e.preventDefault();
    setData(textInput.current.value);
  };

  return (
    <div className="App">
      <input ref={textInput} type="text" />
      <button onClick={onOnclickHandler}>Click Here</button>

      <h2>your IP Address : {data}</h2>
      <h2>your city : </h2>
    </div>
  );
};

export default Home;
