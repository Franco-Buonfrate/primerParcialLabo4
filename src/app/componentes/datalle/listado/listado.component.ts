import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { FirebaseService } from 'src/app/servicios/firebase.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  productos!:Producto[];
  @Output() productoSeleccionado = new EventEmitter<Producto>()
  constructor(private firestore:FirebaseService)
  {

  }

  ngOnInit(): void {
    this.firestore.traer().subscribe((productos: any[]) => {
      this.productos = productos.map((rep: any) => {
        return new Producto(rep.descripcion, rep.codigo,
          rep.precio, rep.stock, rep.pais, rep.comestible, rep.objetoPais);
      });
    });
  }

  enviarProducto(productos:Producto)
  {
    this.productoSeleccionado.emit(productos);
  }
}
