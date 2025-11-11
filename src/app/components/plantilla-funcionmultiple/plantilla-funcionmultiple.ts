import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServicePlantillas } from '../../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcionmultiple',
  standalone: false,
  templateUrl: './plantilla-funcionmultiple.html',
  styleUrl: './plantilla-funcionmultiple.css',
})
export class PlantillaFuncionmultiple implements OnInit{

  public funciones!: Array<string>;
  public plantillas: Array<Empleado>;
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public funcionesSeleccionadas: Array<string>;

  constructor(private _service:ServicePlantillas){
    this.plantillas = new Array<Empleado>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla():void{
    let aux = new Array<string>();
    for (var option of this.selectFunciones.nativeElement.options){
      if (option.selected == true){
        aux.push(option.value)
      }
    } 
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response => {
      this.plantillas = response;
    })

  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe(response =>{
      this.funciones=response
    })
  }
}
