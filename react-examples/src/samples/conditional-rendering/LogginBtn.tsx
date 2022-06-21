import { MouseEvent } from "react";

export const LoginButton = (handleLogin: () => void): JSX.Element => {
    
  return (
    <button onClick={handleLogin}>Login</button>
  );
}

export const LogoutButton = (handleClick: () => void) => {
  
  return (
    <button onClick={handleClick}>Logout</button>
  );
}