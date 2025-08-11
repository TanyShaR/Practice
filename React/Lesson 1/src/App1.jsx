import { useState } from "react";

const App = () => {
  let count = 0;

  let [value, setValue] = useState(0);

  // let arr = useState(0); // [0, f]
  // let value = arr[0]
  // let setValue = arr[1]

  // const obj = {
  //   name: "John",
  //   surname: "Done",
  //   age: 25,
  //   country: {
  //     city: "New York"
  //   }
  // }

  // const { info: { name: studentName, grade} } = student;

  // const name = obj.name;

  // const surname = obj.surname;
  // const age = obj.age;

  // const {name: username, surname, age, country: {city}} = obj;

  // console.log(username, surname, age, city)


  // const arr = ["USA", "New York"];

  // let country = arr[0]; // USA
  // let city = arr[1]; // New York

  // const [country, city] = arr;

  // console.log(country, city)

  const increment = () => {
    count += 1;

    console.log(count);
  }

  const incrementV2 = () => {
    setValue(value += 1)
  }

  console.log("Update components")

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementV2}>Increment V2</button>

      <h2>Count: {count}</h2>
      <h2>Value: {value}</h2>
    </div>
  )
}

export default App