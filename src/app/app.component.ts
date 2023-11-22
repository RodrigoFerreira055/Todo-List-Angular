import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //classe transformada em array?
  public title: string = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o Cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao Supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o Cabelo', true));
    
  }

  remove(remover: Todo){
    const index = this.todos.indexOf(remover);
    console.log(index);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(){

  }

  maskAsUndone(){

  }
}
