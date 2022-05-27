import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import mqtt from "mqtt";
import "./redefineBuffer";

function App() {
  useEffect(() => {
    const mqttTest = mqtt.connect("ws://212.39.114.103:9001/", {
      username: "komore_main",
      password: "mci_neuros_2020",
    });
    console.log(mqttTest);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
