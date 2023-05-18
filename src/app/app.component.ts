import { Component, OnInit } from '@angular/core';
import { HttpService } from './servicios/http.service';
import { FirebaseService } from './servicios/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primerParcial';
  imagenUsuario:string;
  nombreUsuario:string;
  estaLogueado!:boolean;

  constructor(private https:HttpService, private firebase: FirebaseService, private auth:AngularFireAuth)
  {
    this.imagenUsuario = '../assets/logo.png';
    this.nombreUsuario = 'UTN Fra';
    this.https.Api = 'https://api.github.com/users/Franco-Buonfrate';
    this.auth.authState.subscribe(user => {
      this.estaLogueado = !!user;
    });
  }

  ngOnInit(): void {
    this.traerUsuario();
  }

  logOut()
  {
    this.firebase.logout();
    this.estaLogueado = true;
  }

  traerUsuario()
  {
    
    this.https.todos().subscribe((usuario:any)=>{
      this.imagenUsuario = usuario.avatar_url;
      this.nombreUsuario = usuario.name;
    },error => {});
    
  }

}
