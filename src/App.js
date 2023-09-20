import { useState } from "react";
import "./App.css";
import { InputIP } from "./components/InputIP";
import { Result } from "./components/Result";

function App() {
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <InputIP address={address} setAddress={setAddress} />
      <Result address={address} />
    </div>
  );
}

export default App;
