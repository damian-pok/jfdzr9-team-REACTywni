//import libraries:
import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

type State = {
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
};

const initialState = {
  user: null,
  setUser: () => null,
  loading: true,
};

const AuthContext = createContext<State>(initialState);

type ProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext).user;
export const useAuth = () => useContext(AuthContext);
