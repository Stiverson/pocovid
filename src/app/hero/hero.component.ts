import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../config/service.service';
import { Hero } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heros: Hero[] = new Array;

  constructor(private service: ServiceService, @Inject(HttpClient) private http: HttpClient) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(){
    
    this.service.get(environment.urlLocal ).subscribe(result => console.log(result)); 

  }

}
