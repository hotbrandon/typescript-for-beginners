import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((value: T, i: number) => (
        <li key={i}>{render(value)}</li>
      ))}
    </ul>
  );
};

export default List;
