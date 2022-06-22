export const numbers = [1, 2, 3, 4, 5];

export function ListItems({ numbers }: { numbers: number[] }): JSX.Element {
  return (
    <div>
      <ul>
        {numbers.map((num) => (
          <li key={num.toString()}>{num * 2}</li>
        ))}
      </ul>
    </div>
  );
}
