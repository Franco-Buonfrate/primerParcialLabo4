import { Component, Input } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-datalle-repartidor',
  templateUrl: './datalle-repartidor.component.html',
  styleUrls: ['./datalle-repartidor.component.css']
})
export class DatalleRepartidorComponent {
  @Input() repartidoAMostrar!:Repartidor
  
}
