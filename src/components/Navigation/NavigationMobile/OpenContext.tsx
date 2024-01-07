import React, { createContext } from "react";

type OpenContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const openContextState = {
  isOpen: false,
  setIsOpen: () => {},
};

export const OpenContext = createContext<OpenContextType>(openContextState);
