import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../config/firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const UserContext = createContext({});

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      
    } catch (e) {
      console.log(e.message)
    }
  };

  const handleSignout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ 
      handleRegisterUser, handleSignout, handleLogin,
      user, setEmail, setPassword  
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
