import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GoalsComponent } from './components/goals/goals.component';

export const routes: Routes = [
    {path: 'home-component', component: HomeComponent},
    {path: 'about-component', component: AboutComponent},
    {path: 'projects-component', component: ProjectsComponent},
    {path: 'goals-component', component:GoalsComponent}
];
