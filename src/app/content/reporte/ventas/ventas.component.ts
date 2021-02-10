import { formatPercent, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formatWithOptions } from 'util';
import { informacion } from '../../../component/data/informacion';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  infproc=[];
  
  infFoot=[];

  
  anioAnt = new Date().getFullYear()-2 ;

  constructor() { }

  ngOnInit(): void {
    this.ejecucion(1000010599)
  }
  
  ejecucion (id : number)
  {
    this.infproc=[];
    this.infFoot=[];

    informacion.forEach(e => {
      if(e.padre==id && e.orden==0){
        this.infproc.push(e);
      }
      else if(e.padre==id && e.orden==1){
        this.infFoot.push(e);
      }
    });
  }

  calculo(valActual:number, valAnt:number) : string{
    let cal:number=(valAnt-valActual)/1000000;

    let valor : string = '';
    if(cal<0){
      valor = '(' + Math.round(cal*-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ')';
    }
    else{
      valor = '' + Math.round(cal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '';
    }
    return valor;
    
  }
  calculoPorcentaje(valActual:number, valAnt:number): string{
    let cal:number=((valAnt-valActual)/valAnt)*100;

    let valor : string = '';
    
    if(cal<=-200){
      valor = '(200%)';
    }
    else if(cal<0){
      valor = '(' + (cal*-1).toFixed(1) + '%)';
    }
    else if(cal>200){
      valor = '200%';
    }
    else{
      valor = '' + (cal).toFixed(1) + '%';
    }
    return valor;
  }

}
