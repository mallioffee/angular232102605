import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "admin", component: Admin },
    { path: "dashboard", component: Dashboard },
    { path: "dashboard2", component: Dashboard2 },
    { path: "login", component: Login }
];
