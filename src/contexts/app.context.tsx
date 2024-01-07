import React, { createContext, useState } from 'react';
import { getAccessTokenFromLocalStorage, getRoleToLocalStorage } from '../utils/auth.ts';

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isRole: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  setIsAuthenticated: () => {},
  isRole: getRoleToLocalStorage(),
  setRole: () => {}
};

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated
  );
  const [isRole, setRole] = useState<string | null>(initialAppContext.isRole);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isRole,
        setRole
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
