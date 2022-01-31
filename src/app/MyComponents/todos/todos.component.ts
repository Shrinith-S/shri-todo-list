import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  locolTodos: any;
  todos: Todo[];
  i: number;


  constructor() { 
    this.locolTodos =  localStorage.getItem("todos");
    if(this.locolTodos == null)
    {
      this.todos = []
    }
    else
    {
      this.todos = JSON.parse(this.locolTodos);
    }
   
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Todo)
  {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1); 
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodos(todo: Todo)
  {
    console.log(todo);   
    this.todos.push(todo);   
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  strikeTodo(todo: Todo)
  {
    console.log(todo);   
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
