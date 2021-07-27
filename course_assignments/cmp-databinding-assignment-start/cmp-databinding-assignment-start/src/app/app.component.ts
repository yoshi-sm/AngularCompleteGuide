import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newOdd: string[] = [];
newEven: string[] = [];

  componentCreator(entrada: number){
    if(entrada%2 === 0){
      this.newEven.push("Even - "+ entrada.toString());
    }
    else{
      this.newOdd.push("Odd - "+ entrada.toString());
    }
  }
}
