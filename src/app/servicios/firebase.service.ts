import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { CollectionReference, collection } from 'firebase/firestore';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private tokenSubject: BehaviorSubject<string>;
  private collection : CollectionReference;
  public observable : Observable<any[]>;

  constructor(private firestore :Firestore)
  {
    this.tokenSubject = new BehaviorSubject<string>('');
    this.collection = collection(this.firestore, 'productos');
    this.observable = this.traer();
  }

  async loguear(email:string, password:string): Promise<any>
  {
    const auth = getAuth();
    const credenciales = await signInWithEmailAndPassword(auth,email,password);
    const token =  credenciales.user?.uid || '';
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
    return credenciales;
  }

  async logout() : Promise<void>
  {
    const auth = getAuth();
    await signOut(auth);
    this.tokenSubject.next('');
  }

  traer() : Observable<any[]>
  {
    const obsevable = collectionData(this.collection);
    return obsevable;
  }

}
