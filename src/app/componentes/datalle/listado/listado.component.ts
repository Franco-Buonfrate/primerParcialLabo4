import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { FirebaseService } from 'src/app/servicios/firebase.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  repartidores!:Repartidor[];
  @Output() repartidorSeleccionado = new EventEmitter<Repartidor>()
  constructor(private firestore:FirebaseService)
  {

  }

  ngOnInit(): void {
    this.firestore.traer().subscribe((repartidores: any[]) => {
      this.repartidores = repartidores.map((rep: any) => {
        return new Repartidor(rep.apellido, rep.nombre, rep.dni, rep.fechaNac, rep.pais, rep.capacidad, rep.objetoPais);
      });
    });
  }

  enviarRepartidor(repartidor:Repartidor)
  {
    this.repartidorSeleccionado.emit(repartidor);
  }
}
