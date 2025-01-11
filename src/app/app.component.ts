import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, Scroll } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GoalsComponent } from './components/goals/goals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, HomeComponent, RouterLink, RouterLinkActive, AboutComponent, ProjectsComponent, GoalsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-site';
  currentRoute: string = ''; // Track active route

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = 'home-component';
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.currentRoute  = event.urlAfterRedirects.substring(1);
      }

    });
  }

}
