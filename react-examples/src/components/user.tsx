import { Person } from "./extracting-component";

export function User({information}: Person): JSX.Element {
  return (
    <div>
      <h3>My name is: {information.name}</h3>
      <p>I'm {information.age} years old</p>
    </div>
  )
}