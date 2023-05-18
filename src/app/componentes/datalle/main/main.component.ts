import { Component } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  repartidorRecibido!:Repartidor

  recibirRepartidor($repartidor : Repartidor)
  {
    this.repartidorRecibido = $repartidor;
  }
}
