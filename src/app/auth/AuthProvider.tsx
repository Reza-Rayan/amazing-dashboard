import { createContext, ReactNode, useEffect, useState } from "react";
import { getCurrentUser, logout } from "./services/authService";

interface AuthContextType {
  user: string | null;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = getCurrentUser();
    if (token) {
      setUser(token);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
