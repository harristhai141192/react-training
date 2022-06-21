import { Greeting } from "./GreetingUser";
import { LoginButton, LogoutButton } from "./LogginBtn";
export const LoginController = () => {
  if(isLoggedIn) {
    <Greeting isLoggedIn={true} />
  }
  return <Greeting isLoggedIn={false}/>

}

