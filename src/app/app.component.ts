import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'MA-Games';
  mostrarMenu:boolean = true;
mostrar: any;


  constructor(private _loginService: LoginService){}
  ngOnInit(): void {
   this._loginService['getMostraMenu']().subscribe(
     (    res: boolean) => {this.mostrarMenu = res;}
   )
  }
  ngOnDestroy(){
    localStorage.clear();
  }
}
