import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [
    {id: 1, nome: "Dr Nice"},
    {id: 2, nome: "Super Stive"},
    {id: 3, nome: "Mr. Wendersonn"},
    {id: 4, nome: "Magneta"},
    {id: 5, nome: "RubberMan"},
    {id: 6, nome: "Magma"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
