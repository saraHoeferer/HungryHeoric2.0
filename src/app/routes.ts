import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routeConfig: Routes = [
    {
      path: '',
      component: MainComponent,
      title: 'Home page'
    },
  ];
  
  export default routeConfig;