import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaComponent } from './componentes/AltaProducto/alta/alta.component';
import { MainComponent } from './componentes/datalle/main/main.component';
import { EmpleadoGuard } from './guardianes/empleado.guard';

const routes: Routes = [
  {path: "", component: BienvenidaComponent},
  {path: "login", component: LoginComponent},
  {path: "alta", component: AltaComponent, canActivate:[EmpleadoGuard]},
  {path: "detalle", component: MainComponent, canActivate:[EmpleadoGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
