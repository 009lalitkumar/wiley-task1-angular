import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {
  firstName: string = 'Lalit';
  lastName: string = 'Kumar';
  constructor() { }

  ngOnInit(): void {
  }

}
