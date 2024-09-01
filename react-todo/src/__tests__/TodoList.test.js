// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Test the App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText(/add todo/i));
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed');
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText(/delete/i, { selector: 'button' }));
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
