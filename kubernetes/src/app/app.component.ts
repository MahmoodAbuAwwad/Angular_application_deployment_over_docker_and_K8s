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
  ];

  onAdd (){
    if (this.todoBar.nativeElement.value!==""){
      this.todos.push(this.todoBar.nativeElement.value);
    }
  }
}
