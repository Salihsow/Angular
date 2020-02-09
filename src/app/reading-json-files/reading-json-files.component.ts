import { Component, OnInit } from '@angular/core';
//import {SampleJson } from '././assets/SampleJson.json';
@Component({
  selector: 'app-reading-json-files',
  templateUrl: './reading-json-files.component.html',
  styleUrls: ['./reading-json-files.component.css']
})
export class ReadingJsonFilesComponent implements OnInit {

  constructor() {
    console.log('Reading local json file')
    //console.log(SampleJson)
   }

  ngOnInit() {

  }

}
