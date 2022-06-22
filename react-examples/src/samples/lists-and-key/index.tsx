export const Persons: PersonType[] = [{id:1, name:"Bao"}, {id:221, name:"Linh"}, {id:998, name:"Cang"}];

type PersonType = {
  id: number,
  name: string
}

export function ListItems({ Persons }: { Persons: PersonType[] }): JSX.Element {
  return (
    <div>
      <ul>
        {Persons.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
