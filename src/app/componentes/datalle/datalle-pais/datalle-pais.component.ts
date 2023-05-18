import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-datalle-pais',
  templateUrl: './datalle-pais.component.html',
  styleUrls: ['./datalle-pais.component.css']
})
export class DatallePaisComponent {
  @Input() paisAMostrar?:Pais

  getLanguages(languages: { [key: string]: string }): string[] {
    return Object.keys(languages);
  }
}
