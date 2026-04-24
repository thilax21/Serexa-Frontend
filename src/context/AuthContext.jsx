// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');
//     const name = localStorage.getItem('name');
//     return token ? { token, role, name } : null;
//   });

//   const login = (data) => {
//     localStorage.setItem('token', data.token);
//     localStorage.setItem('role', data.role);
//     localStorage.setItem('name', data.name);
//     setUser(data);
//   };

//   const logout = () => {
//     localStorage.clear();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ ADDED: Load user from localStorage on initial render
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      const name = localStorage.getItem("name");
      if (token && role && name) {
        setUser({ token, role, name });
      }
    } catch (error) {
      console.error("Failed to load user from localStorage", error);
      logout();
    }
  }, []);

  const login = (data) => {
    // ✅ The API response has a 'user' object inside 'data'
    // data = { token, role, user: { name, ... } }
    const token = data.token;
    const role = data.role;
    // ✅ CHANGED: Correctly get name from data.user.name
    const name = data.user.name;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);

    setUser({ token, role, name });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);