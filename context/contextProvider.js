import React from "react";
import { GlobalContext } from "./createContext";

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [isCartActive, setIsCarActive] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, isCartActive, setIsCarActive }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
