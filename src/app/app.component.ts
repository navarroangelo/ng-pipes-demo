import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  presentDate = new Date();

  time$ = interval(1000)
  .pipe(map(val => new Date()));

  price : number = 20000;
  fruits: string[] = [];
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.4312334;

  ngOnInit() {
    this.fruits = ['Apple', 'Banana', 'Grapes', 'Orange', 'Pineapple'];
  }

  testObject = {
    Name: 'Garun',
    Age: 25,
    Food : 'Cheesecake'
  };

  testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}