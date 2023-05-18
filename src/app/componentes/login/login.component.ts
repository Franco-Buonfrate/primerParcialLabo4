import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin: FormGroup;

  users = [
    {email:"admin@admin.com" , password:"123456"},
    {email:"empleado@empleado.com" , password:"222222"}
  ]
  constructor(public formBuilder: FormBuilder, private router: Router , private authService: FirebaseService) 
  {
    this.formularioLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) 
    })
  }

  login()
  {
   this.authService.loguear(
      this.formularioLogin.get('email')?.value!,
      this.formularioLogin.get('password')?.value
    )
    .then(()=>{
      this.router.navigate([''])
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  hardcode(i:number)
  {
    this.formularioLogin.get('email')?.setValue(this.users[i].email);
    this.formularioLogin.get('password')?.setValue(this.users[i].password);
  }
}
 