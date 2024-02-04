import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from '../guard.guard';
const restritoRoutes: Routes = [
    {
        path "restrito": component: RestritoComponent, children: [
            { path: 'inicio', component: InicioComponent, canActivate: [GuardGuard] },
            { path: 'login', component: LoginComponent, canActivate: [GuardGuard] },
            { path: 'restrito', component: RestritoComponent, canActivate: [GuardGuard] },
            
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    },
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }