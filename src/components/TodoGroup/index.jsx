import { SubHeading } from "../SubHeading";
import { TodoList } from "../ToDoList";
import { TodoItem } from "../ToDoItem";

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <TodoList>
        {items.map(function (t) {
          return <TodoItem key={t.id} item={t} />
        })}
      </TodoList>
    </>
  );
}