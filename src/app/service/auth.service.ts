import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/UserLogin';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(userLogin:UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://projetoaponte.herokuapp.com/usuarios/logar', userLogin)
  }
  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetoaponte.herokuapp.com/usuarios/cadastrar', usuario)
  }
}
