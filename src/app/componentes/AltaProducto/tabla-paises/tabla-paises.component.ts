import { Component, EventEmitter, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Output() paisSeleccionado:EventEmitter<Pais> = new EventEmitter<Pais>();
  listaPaises : Pais[];

  constructor(private httpService:HttpService)
  {
    this.listaPaises = [];
  }

  ngOnInit(): void {
    this.traerPaises();
  }

  traerPaises(): void {
    this.traerAfricanos();
    this.traerEuropeos();
  }
  
  traerEuropeos():void
  {
    this.httpService.Api = 'https://restcountries.com/v3.1/region/Europe/?fields=flags,subregion,translations,capital,languages,population';
    this.httpService.todos().subscribe((paises: any[]) => {
      this.listaPaises.push(...paises.filter((pais) => pais.translations.spa.common == 'España' ||  pais.translations.spa.common == 'Francia' ||  pais.translations.spa.common == 'Alemania' ));
    });
  }

  traerAfricanos():void
  {
    this.httpService.Api = 'https://restcountries.com/v3.1/region/Africa/?fields=flags,subregion,translations,capital,languages,population';
    this.httpService.todos().subscribe((paises: Pais[]) => {
      this.listaPaises.push(...paises.filter((pais) => pais.translations.spa.common == 'Egipto' ||  pais.translations.spa.common == 'Ghana' ||  pais.translations.spa.common == 'Camerún' ));
    });
  }

  enviarPais($pais:Pais):void
  {
    this.paisSeleccionado.emit($pais);
  }

}
