import { Component, OnInit } from '@angular/core';
import { formatWithOptions } from 'util';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  informacion = [
    {'forecast':41653,'anioAnt':53421,'actual':54770,'idCeco':929281,'CECO':'MEXICO'},
    {'forecast':4915,'anioAnt':28031,'actual':30124,'idCeco':122,'CECO':'NEGOCIOS QUE NO CONSOLIDAN'},
    {'forecast':1985,'anioAnt':1936,'actual':2295,'idCeco':211233,'CECO':'GUATEMALA'},
    {'forecast':1100,'anioAnt':968,'actual':1212,'idCeco':1231234,'CECO':'HONDURAS'},
    {'forecast':1798,'anioAnt':707,'actual':843,'idCeco':2131235,'CECO':'PERU'},
    {'forecast':383,'anioAnt':388,'actual':470,'idCeco':1236,'CECO':'PANAMA'},
    {'forecast':237,'anioAnt':191,'actual':239,'idCeco':1327,'CECO':'NEGOCIOS CERRADOS O DISCONTINUOS'},
    {'forecast':20,'anioAnt':188,'actual':87,'idCeco':15148,'CECO':'DESPACHOS LATINOAMERICA'},
    {'forecast':52091,'anioAnt':85830,'actual':90040,'idCeco':155679,'CECO':'GRUPO ELEKTRA'},
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  ejecucion (id : number)
  {
    alert(id);
  }
}
