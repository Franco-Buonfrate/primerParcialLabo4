import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaComponent } from './componentes/AltaRepartidor/alta/alta.component';
import { MainComponent } from './componentes/datalle/main/main.component';
import { EmpleadoGuard } from './guardianes/empleado.guard';
import { AdminGuard } from './guardianes/admin.guard';

const routes: Routes = [
  {path: "", component: BienvenidaComponent},
  {path: "login", component: LoginComponent},
  {path: "alta", component: AltaComponent, canActivate:[EmpleadoGuard]},
  {path: "detalle", component: MainComponent, canActivate:[AdminGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
