import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;


  mostraMenu = new Subject<boolean>();


  constructor() { }


  login(usuarios:string, senha:string): void{
    if(usuarios== "aluno" && senha== "1234"){
      localStorage.setItem('token', 'quer1234');
      this.mostraMenu.next(false);

    }else
    this.mostraMenu.next(true);
    {
{
  setmostraMenu(valor: Boolean){
    this.mostraMenu.next(valor);
  }
  getmostraMenu(){
    return this.mostraMenu.asObservable();
  }
}
    }
  }
}


