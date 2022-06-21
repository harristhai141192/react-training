const UserGreeting = () => {
  return <h1>Welcome back!</h1>;
}
const GuestGreeting = () => {
  return (<h1>Please sign up.</h1>);
}

type a = {
  isLoggedIn: boolean;
}

export const Greeting = (props: a) => {
  const {isLoggedIn} = props;

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}