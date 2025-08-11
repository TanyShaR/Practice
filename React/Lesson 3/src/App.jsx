import { useState } from "react";

const App = () => {
  // const arr = ["John", "Doe"];
  
  // let name = arr[0];
  // let surname = arr[1];

  // const [name, surname] = arr;
  // console.log("Name:", name, "Surname:", surname);
  
  // let arr = useState(0);

  // let value = arr[0];
  // let setValue = arr[1];

  const [value, setValue] = useState(0);
  const [isMore, setIsMore] = useState(false);

  const handleIncrement = () => {
    setValue(value + 1);
  }

  const handleDecrement = () => {
    setValue(value - 1);
  }

  const clearValue = () => {
    setValue(0);
  }

  const toggleMore = () => {
    setIsMore(!isMore);
  }

  return (
   <div className="container">
    <div>
      <h1>Counter: {value}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={clearValue}>Clear Value</button>
    </div>

    <div>
      <button onClick={toggleMore}>{isMore ? "Less" : "More"}</button>

      {
        isMore && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quibusdam inventore odio beatae culpa ullam illo deleniti 
            possimus impedit? Repellendus, ullam.
          </p>
        )
      }
    </div>
   </div>
  )
}

export default App
