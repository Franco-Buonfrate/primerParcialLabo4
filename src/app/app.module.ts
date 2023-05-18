import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AltaComponent } from './componentes/AltaProducto/alta/alta.component';
import { TablaPaisesComponent } from './componentes/AltaProducto/tabla-paises/tabla-paises.component';
import { MainComponent } from './componentes/datalle/main/main.component';
import { ListadoComponent } from './componentes/datalle/listado/listado.component';
import { DatallePaisComponent } from './componentes/datalle/datalle-pais/datalle-pais.component';
import { DatalleProductoComponent } from './componentes/datalle/datalle-producto/datalle-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaComponent,
    TablaPaisesComponent,
    MainComponent,
    ListadoComponent,
    DatallePaisComponent,
    DatalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
