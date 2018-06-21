import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap/bootstrap.css']
})
export class AppComponent implements OnInit {
  show: String;
  theTask: {title: String, description: String};
  editFlag: boolean;
  allTasks = [];
  constructor(private _httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.theTask.title = '';
    this.theTask.description = '';
    this.editFlag = false;
  }

  getAllTask(): void {
    const obs = this._httpServiceService.getAllTask();
    obs.subscribe(respo => {
      this.allTasks = respo['data'];
    });
  }

  showDescription(task) {
    this.theTask.description = task.description;
  }

  deleteTask(task) {

  }

  addTask() {
    const obs = this._httpServiceService.addTask(this.theTask);
    obs.subscribe(respo => {
      console.log(respo);
    },
    err => {
      console.log(err.errors);
    });
  }
}
