// context/UserContext.tsx
import React, { createContext, useState, type ReactNode } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

type User = {
  firstname: string;
  email: string;
} | null;

type UserContextType = {
  user: User;
  loading: boolean;
  error: string | null;
  register: (firstname: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  console.log(user,'cntxt')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (firstname: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: firstname });

      setUser({
        firstname,
        email: userCredential.user.email || "",
      });
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser({
        firstname: userCredential.user.displayName || "",
        email: userCredential.user.email || "",
      });
      console.log(user,'loign')
      console.log(userCredential.user)
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, error, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
