import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";


function App() {
  const [count, setCount] = useState();

  return (
    <>
      <header className="head">
      <Head/>
      </header>
      <body className="main">
          <Body/>
      </body>
      
      
      
    </>
  );
}

export default App;
