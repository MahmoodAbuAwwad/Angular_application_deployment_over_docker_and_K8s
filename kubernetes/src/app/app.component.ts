import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('todoBar') todoBar;
  title = 'kubernetes';
  todos = [
    'Hello',
    'world'
  ];

  onAdd(){
    this.todos.push(this.todoBar.nativeElement.value);
  }
}
