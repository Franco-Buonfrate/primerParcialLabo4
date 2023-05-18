import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {
  formularioAlta:FormGroup;
  paisForm!:string;
  objetoPais!:Pais;

  constructor(public fb:FormBuilder, private router:Router, private firestore:Firestore)
  {
    this.formularioAlta = this.fb.group({
      descripcion: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99999999), this.spacesValidator]),
      stock: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99999999), this.spacesValidator]),
      precio: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99999999) ,this.spacesValidator]),
      pais: new FormControl('', [Validators.required]),
      comestible: new FormControl(false, [Validators.required]),
      objetoPais: new FormControl(null, [Validators.required])
    });
  }
/*
  get Nombre() {
    return this.formularioAlta.get('nombre') as FormControl;
  }
  get Apellido() {
    return this.formularioAlta.get('apellido') as FormControl;
  }
  get FechaNac() {
    return this.formularioAlta.get('fechaNac') as FormControl;
  }
  get Dni() {
    return this.formularioAlta.get('dni') as FormControl;
  }
  get Capacidad() {
    return this.formularioAlta.get('capacidad') as FormControl;
  }
  get UnidadPropia() {
    return this.formularioAlta.get('unidadPropia') as FormControl;
  }
  */
  get Pais() {
    return this.formularioAlta.get('pais') as FormControl;
  }
  get ObjetoPais() {
    return this.formularioAlta.get('objetoPais') as FormControl;
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = control.value;

    if (nombre && typeof nombre === 'string') {
      const spaces = nombre.includes(' ');

      return spaces ? { containsSpaces: true } : null;
    }

    return null;
  }

  asignarPais(pais:Pais)
  {
    this.Pais.setValue(pais.translations.spa.common);
    this.ObjetoPais.setValue(pais);
  }

  submitForm() {
    if (this.formularioAlta.valid) {
      const placeRef = collection(this.firestore, 'productos');
      addDoc(placeRef, this.formularioAlta.value);
      this.formularioAlta.reset();
    } else {
      Object.keys(this.formularioAlta.controls).forEach(controlName => {
        const control = this.formularioAlta.get(controlName);
        control?.markAsTouched();
      });
    }
  }
}
