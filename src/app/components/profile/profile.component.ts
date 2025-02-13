import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  name: string;
  year: number;

  constructor() { }

  ngOnInit(): void {
    this.id = "B6016357";
    this.name = "Trirong Bamrungketaudom";
    this.year = 1998;
  }

  getName() {
    return this.name;
  }

}
