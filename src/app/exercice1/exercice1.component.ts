import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public messages: Message[] = [
    {
      title: "Bonjour",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public inputType = "date"

  public onClick(event: Event): void {
    console.log("bonjour");
  }

}
