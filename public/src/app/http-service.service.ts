import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private _http: HttpClient) { }

  getAllTask() {
    return this._http.get('/tasks');
  }

  addTask(newTask) {
    return this._http.post('/create', newTask);
  }

}
