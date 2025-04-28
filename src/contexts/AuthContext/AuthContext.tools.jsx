import { createContext, useContext } from 'react';

const authContext = createContext(); // createContext(null);
const useAuthContext = () => useContext(authContext);

export { authContext, useAuthContext };
