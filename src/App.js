import logo from './logo.svg';
// import './App.css';
import "./style.scss";
import Register from './pages/Register';
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/Auth';
function App() {
  const { currentUser } = useContext(AuthContext)
  console.log("Main APP", currentUser)
  const ProtectedRoutes = ({children}) => {
    console.log(children,'children')
    if (!currentUser) {
      return <Navigate to="/login" />

    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
