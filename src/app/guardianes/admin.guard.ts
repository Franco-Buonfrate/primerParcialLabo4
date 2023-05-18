import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user && this.isAdmin(user.email??'')),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/login']); // Redirige al usuario a la página principal si no es un administrador
        }
      })
    );
  }

  private isAdmin(email: string): boolean {
    const adminEmails = 'admin@admin.com';
    return adminEmails.includes(email);
  }
}
