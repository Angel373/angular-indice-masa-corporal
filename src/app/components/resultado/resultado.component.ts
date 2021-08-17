import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  imc:number;
  resultado: string;
  interpretacion: string;
  constructor(private route:ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.imc =+route.snapshot.paramMap.get('valor')!;
    console.log(this.imc);
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if(this.imc >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'tiene un peso corporal superior de lo normal';
    } else if (this.imc >= 18.5){
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tiene un peso Normal: siga cuidandose';
    } else {
      this.resultado = 'Bajo de peso';
      this.interpretacion = 'Su peso corporal es bajo, Cuidado!..';
    }
  }
}
