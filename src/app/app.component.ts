import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route changes and update currentRoute
    this.router.events.subscribe(() => {
      this.currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || 'home-component';
    });
  }
}
