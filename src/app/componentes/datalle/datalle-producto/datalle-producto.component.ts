import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-datalle-producto',
  templateUrl: './datalle-producto.component.html',
  styleUrls: ['./datalle-producto.component.css']
})
export class DatalleProductoComponent {
  @Input() productoAMostrar!:Producto

}
