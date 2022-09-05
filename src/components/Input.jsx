import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import "./Input.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function Input() {
  const {
    registerEmail,
    setRegisterEmail,
    registerName,
    setRegisterName,
    registerPassword,
    setRegisterPassword,
  } = useContext(Context);
  let navigate = useNavigate();

  const registerAccount = async (e) =>  {
    e.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
   console.log("email", registerEmail)
   console.log("password", registerPassword)
   console.log("name", registerName)
  }, [registerEmail,registerName, registerPassword])

  return (
    <div className="form-el">
      <h3 className="title">SIGN UP</h3>
      <form>
        <input
          placeholder="USERNAME"
          className="input-field"
          value={registerName}
          onChange={(event) => setRegisterName(event.target.value)}
        />
        <input
          placeholder="EMAIL"
          className="input-field"
          value={registerEmail}
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          placeholder="PASSWORD"
          className="input-field"
          type="password"
          value={registerPassword}
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button className="input-field" className="submit-btn" onClick={(e) => registerAccount(e)}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Input;
