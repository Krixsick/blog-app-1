import { useState } from "react";
import Home from "./Components/Home.jsx";
import "./App.css";
import Header from "./Components/Header.jsx";
function App() {
  const [count, setCount] = useState(0);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/");
  };

  return (
    <>
      <div className="grid h-[2000px] w-screen grid-cols-3 grid-rows-[5%_auto]">
        <div className="flex justify-center col-span-3">
          <Header></Header>
        </div>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
