import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddEven = new EventEmitter<number>();
  emitterHolder: any = null;
  counting = setInterval(() =>(this.counting += 1), 137);
  constructor() { }

  ngOnInit(): void {
  }

  numberEmitter(){
    if (this.emitterHolder == null){
    this.emitterHolder = setInterval(() => this.oddEven.emit(this.counting), 1000)
    }
  }
  
  stopNumberEmitter(){
    clearInterval(this.emitterHolder);
    this.emitterHolder = null;
  }


}
