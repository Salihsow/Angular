import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-department',
  template: `

      <h3 class="btn btn-primary">
        Department List
      </h3>
      <ul class="items">
        <li appHighlight (click)="onSelect(department)" *ngFor="let department of departments">
            <span class="badge">{{ department.id }}</span>  {{department.name}}      
        </li>
      </ul>
      <h2 (click)="onSelect2()">Click Me</h2>

      <div appHighlight>
        Bonjour je teste une directive
      </div>
      <input type="text" class="form-control" appRainbow>

  
  
  
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongDBo"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ]
  constructor(private router: Router) { }

  ngOnInit(){
  }

  onSelect(department){ 
      this.router.navigate(['/departments',department.id]);
  }
  onSelect2(){
    this.router.navigate(['/departments',2])
    console.log("Click Me");
  }

}
