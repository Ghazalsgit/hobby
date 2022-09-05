import React, { useContext } from "react";
import { Context } from "../context/Context";


function Header() {
  const { inputValue, setInputValue } = useContext(Context);
  return <div>
      <h1>
          welcome {inputValue.userName}
      </h1>
  </div>;
}

export default Header;
