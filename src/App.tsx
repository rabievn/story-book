import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/test/Input/Input";
import Checkbox from "./components/test/Checkbox/Checkbox/Checkbox";
import Button from "./components/test/Button/Button";
import PrimaryButton from "./components/crm/primaryButton/PrimaryButton";
import svg from "./components/crm/primaryButton/bankClients.svg";
import { BasketIcon } from "./components/crm/primaryButton/BasketIcon";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input size="large" placeholder="Small size" />
        <br />
        <br />
        <br />

        <PrimaryButton
          isBackgroundExist={false}
          backColor="blue"
          borderRadius="xsm"
          isDark={true}
          width="500px"
        >
          <BasketIcon />
          <div>PrimaryButton</div>
        </PrimaryButton>
      </header>
    </div>
  );
}

export default App;
