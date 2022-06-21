import { User } from './user';

export type Person = {
  information: {
    name: string,
    age: number
  }
  description?: string
}

export function Person(): JSX.Element {
  const person: Person = {
    information: {
      name: 'Thai Gia Bao',
      age: 30,
  },
    description: 'Description: A student'
  }
  return (
    <>
    <User information={person.information} />
    <p>{person.description}</p>
    </>
  )
}