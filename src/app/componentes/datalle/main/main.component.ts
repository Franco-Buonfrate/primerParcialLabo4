import { Component } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productoRecibido!:Producto

  recibirProducto($producto : Producto)
  {
    this.productoRecibido = $producto;
  }
}
