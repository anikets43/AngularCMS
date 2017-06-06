import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  { path: '**', redirectTo: '/dashboard' }
];
