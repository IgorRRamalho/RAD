import { useState } from "react";
import "./App.css";
import Head from "./components/Head";


function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Head/>
    </>
  );
}

export default App;
