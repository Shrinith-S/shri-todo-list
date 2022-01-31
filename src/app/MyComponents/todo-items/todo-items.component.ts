import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent implements OnInit {
@Input() todo :Todo;
@Input() i : number;
@Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
@Output() todoStrike : EventEmitter<Todo> = new EventEmitter();
@Output() isStriked : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo : Todo)
  {
    this.todoDelete.emit(todo);
    console.log("Clicked hit");
  }
  onCheckboxClick(todo: Todo)
  {   
    this.todoStrike.emit(todo);
    console.log("from todo-items");

  }
}
