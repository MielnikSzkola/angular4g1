import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToDo} from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  todos: ToDo[] = [];

  errorMessage: string = '';

  addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMessage = 'zadanie musi mieć więcej niż 3 znaki';
      return;
    }

    this.todos.push({name: todo, isComplete: false});
    this.errorMessage = '';
    console.log(this.todos);
  }

  changeTodoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
