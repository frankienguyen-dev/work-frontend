import React, { createContext, useState } from 'react';
import { getAccessTokenFromLocalStorage, getRoleToLocalStorage } from '../utils/auth.ts';
import { CompanyInfoInterface, FoundingInfoInterface } from '../types/company.type.ts';

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isRole: string | null;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
  companyInfo: CompanyInfoInterface | null;
  setCompanyInfo: React.Dispatch<React.SetStateAction<CompanyInfoInterface | null>>;
  foundingInfo: FoundingInfoInterface | null;
  setFoundingInfo: React.Dispatch<React.SetStateAction<FoundingInfoInterface | null>>;
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  setIsAuthenticated: () => {},
  isRole: getRoleToLocalStorage(),
  setRole: () => {},
  companyInfo: null,
  setCompanyInfo: () => {},
  foundingInfo: null,
  setFoundingInfo: () => {}
};

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated);
  const [isRole, setRole] = useState<string | null>(initialAppContext.isRole);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfoInterface | null>(initialAppContext.companyInfo);
  const [foundingInfo, setFoundingInfo] = useState<FoundingInfoInterface | null>(initialAppContext.foundingInfo);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isRole,
        setRole,
        companyInfo,
        setCompanyInfo,
        foundingInfo,
        setFoundingInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
