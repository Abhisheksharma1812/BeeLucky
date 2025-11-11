import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API = import.meta.env.VITE_API || 'http://localhost:4000/api'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Global stored user
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await axios.get(API + "/user", {
          headers: { Authorization: `Bearer ${token}` }
        });

       //  console.log("Fetched user data:", res.data.user); return;
        setUser(res.data.user);
      } catch {
        setUser(null);
      }
      setLoading(false);
    })();
  }, []);

  return (
   <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
