import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';

export const routes: Routes = [
    {path: 'home-component', component: HomeComponent},
    {path: 'about-component', component: AboutComponent},
    {path: 'projects-component', component: ProjectsComponent},
    {path: 'goals-component', component:GoalsComponent}
];
