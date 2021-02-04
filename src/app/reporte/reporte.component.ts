import { formatPercent, PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formatWithOptions } from 'util';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  informacion = [
    {'forecast':41653,'anioAnt':53421,'actual':54770,'idCeco':929281,'CECO':'MEXICO','padre':-1},
    {'forecast':4915,'anioAnt':28031,'actual':30124,'idCeco':122,'CECO':'NEGOCIOS QUE NO CONSOLIDAN','padre':-1},
    {'forecast':1985,'anioAnt':1936,'actual':2295,'idCeco':211233,'CECO':'GUATEMALA','padre':-1},
    {'forecast':1100,'anioAnt':968,'actual':1212,'idCeco':1231234,'CECO':'HONDURAS','padre':-1},
    {'forecast':1798,'anioAnt':707,'actual':843,'idCeco':2131235,'CECO':'PERU','padre':-1},
    {'forecast':383,'anioAnt':388,'actual':470,'idCeco':1236,'CECO':'PANAMA','padre':-1},
    {'forecast':237,'anioAnt':191,'actual':239,'idCeco':1327,'CECO':'NEGOCIOS CERRADOS O DISCONTINUOS','padre':-1},
    {'forecast':20,'anioAnt':188,'actual':87,'idCeco':15148,'CECO':'DESPACHOS LATINOAMERICA','padre':-1},
    {'forecast':52091,'anioAnt':85830,'actual':90040,'idCeco':155679,'CECO':'GRUPO ELEKTRA','padre':-1},
    {'forecast':237,'anioAnt':191,'actual':239,'idCeco':1327,'CECO':'NEGOCIOS CERRADOS O DISCONTINUOS','padre':929281},
    {'forecast':20,'anioAnt':188,'actual':87,'idCeco':15148,'CECO':'DESPACHOS LATINOAMERICA','padre':929281},
    {'forecast':52091,'anioAnt':85830,'actual':90040,'idCeco':155679,'CECO':'GRUPO ELEKTRA','padre':929281},
  ];

  infproc=[];
  constructor() { }

  ngOnInit(): void {
    this.ejecucion(-1)
  }

  ejecucion (id : number)
  {
    this.infproc=[];
    this.informacion.forEach(e => {
      if(e.padre==id){
        this.infproc.push(e);
      }
    });
  }

  calculo(valActual:number, valAnt:number) : string{
    let cal:number=(valAnt-valActual);

    let valor : string = '';
    if(cal<0){
      valor = '(' + (cal*-1) + ')';
    }
    else{
      valor = '' + (cal) + '';
    }
    return valor;
    
  }
  calculoPorcentaje(valActual:number, valAnt:number): string{
    let cal:number=(valAnt-valActual)/valAnt;

    let valor : string = '';
    
    if(cal<=200){
      valor = '(200)';
    }
    else if(cal<0){
      valor = '(' + (cal*-1) + ')';
    }
    else if(cal>200){
      valor = '200';
    }
    else{
      valor = '' + (cal) + '';
    }
    return valor;
  }
}
