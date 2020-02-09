import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
 
  title = 'angular-routing';
  products: any = [];

  audios : any;

msbapDisplayTitle = false; 
msbapDisplayVolumeControls = true;  

 

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }


  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
  getList(product){
    console.log(product)
    this.audios = product.audio;
    console.log(this.audios.length)
    
  }
}


