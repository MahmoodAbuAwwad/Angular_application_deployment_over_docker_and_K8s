import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from './requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('todoBar') todoBar;
  title = 'kubernetes';
  todos;

  constructor(private req: ConfigService) {}
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.req.getData().subscribe(data => {
      // console.log(data);
      this.todos = data;
    });

  }

  onAdd(){

    if (this.todoBar.nativeElement.value !== ""){
      // console.log("hey You");
      this.req.addData(this.todoBar.nativeElement.value);
      this.todos.push(this.todoBar.nativeElement.value);
    }
  }


}
