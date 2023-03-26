//import libraries:
import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

type State = {
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialState = {
  user: null,
  setUser: () => null,
};

const AuthContext = createContext<State>(initialState);

type ProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext).user;
