import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  email: string;
  exp: number;
}

interface AuthContextType {
  saveData: () => void;
  userData: User | null;
  handleLogout: () => void;
}

interface childrenProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<childrenProps> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);

  const saveData = async () => { 
    const encodedUser = localStorage.getItem("userToken"); 
    console.log(encodedUser);

    if (encodedUser) {
      try {
        const decodedUser = jwtDecode<User>(encodedUser);
        const currentTime = Date.now() / 1000; // Current time in seconds

        // Check if token is expired
        if (decodedUser.exp < currentTime) {
          await refreshToken(); 
        } else {
          setUserData(decodedUser);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  };

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken"); // Assuming refreshToken is stored in localStorage

      const response = await fetch('/api/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include refresh token securely (e.g., in an Authorization header)
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        const newAccessToken = await response.json();
        localStorage.setItem("userToken", newAccessToken); 
        saveData(); // Update userData with the new token
      } else {
        // Handle refresh token error (e.g., invalid or expired)
        console.error("Refresh token error:", response.status);
        // Consider logging the user out
        handleLogout(); 
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      // Handle error, e.g., log the user out
      handleLogout(); 
    }
  };

  const handleLogout = () => {
    // Clear tokens and user data
    localStorage.removeItem("userToken");
    localStorage.removeItem("refreshToken"); 
    setUserData(null);
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveData, userData, handleLogout }}> 
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }

  return context;
};

export default AuthContextProvider;