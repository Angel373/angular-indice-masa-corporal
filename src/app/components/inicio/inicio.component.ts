import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 60;
  altura = 150;
  genero = ''; 

  masculino(){
    this.genero = 'masculino';
  }
  femenino(){
    this.genero = 'femenino';
  }
  constructor( private router: Router) { }


  ngOnInit(): void {
  }

  cambiarAltura(event:any){
    this.altura = event.target.value;
  }

  calcular() {
    //
    this.router.navigate(['/resultado']);
  }

}
