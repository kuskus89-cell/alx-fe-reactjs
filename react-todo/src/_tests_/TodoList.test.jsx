import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

test("renders initial demo todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Eat breakfast")).toBeInTheDocument();
  expect(screen.getByText("Go to the gym")).toBeInTheDocument();
  expect(screen.getByText("Finish React project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo as completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  fireEvent.click(todoItem); // Clicks the span to toggle

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");

  // Deletes "Eat breakfast" (index 0)
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Eat breakfast")).not.toBeInTheDocument();
});