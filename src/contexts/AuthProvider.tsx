import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';

type AuthContextProps = {
  isAuthorized: boolean
  user: User | null
} | undefined;

type AuthProviderProps = {
  children: React.ReactNode
};

const AuthContext = createContext<AuthContextProps>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthorized(true);
        setUser(user);
      } else {
        setIsAuthorized(false);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthorized, user }}>
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };