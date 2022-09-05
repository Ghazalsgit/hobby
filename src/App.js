import Input from "./components/Input";
import Header from "./components/Header";
import React, { useState, useContext } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <Context.Provider value={{ registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, registerName, setRegisterName }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Input />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                </>
              }
            />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
