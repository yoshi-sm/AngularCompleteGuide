import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuna',
  templateUrl: './tuna.component.html',
  styleUrls: ['./tuna.component.css']
})
export class TunaComponent implements OnInit {
  displayText = true;
  buttonClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickCounter(){
    if(this.displayText == true){
      this.displayText = false;
    } else{
      this.displayText = true;
    }
    this.buttonClicks.push(new Date());
  }
}
