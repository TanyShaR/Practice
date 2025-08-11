import { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    console.log("Fetching data ..."); // componentDidMount
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>

      <h2>{value}</h2>
    </div>
  );
};

export default App;
