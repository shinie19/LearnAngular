import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { FormControl } from '@angular/forms';
import { TodoService } from '../service/todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  content = new FormControl();

  constructor(private todoService: TodoService) {
    this.todoList = this.getAllTodos();
  }

  ngOnInit(): void {}

  getAllTodos(): Todo[] {
    let todos: Todo[] = [];
    this.todoService.getAll().subscribe((res) => {
      todos = res;
    });
    return todos;
  }

  toggleTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
    this.todoService
      .updateTodo(i, this.todoList[i])
      .subscribe((res) => console.log(res));
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false,
      };
      this.todoService.saveTodo(todo);
      this.content.reset();
    }
  }
}
