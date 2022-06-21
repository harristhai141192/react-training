import { PersonType } from "./ExtractingComponent";

export function User({information}: PersonType): JSX.Element {
  return (
    <div>
      <h3>My name is: {information.name}</h3>
      <p>I'm {information.age} years old</p>
    </div>
  )
}