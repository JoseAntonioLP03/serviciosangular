import { Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../../services/service.plantillas';
import { Empleado } from '../../models/empleado';
import { ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-plantilla-component',
  standalone: false,
  templateUrl: './plantilla-component.html',
  styleUrl: './plantilla-component.css',
})
export class PlantillaComponent implements OnInit{
  public funciones!: Array<string>;
  @ViewChild("selectfuncion") selectFuncion!:ElementRef;
  public plantillas!: Array<Empleado>;

  constructor(private _service: ServicePlantillas) {
    this.plantillas = new Array<Empleado>();
  }

  mostrarPlantilla():void{
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).then(response =>{
      this.plantillas = response
    })
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response =>{
      this.funciones=response
    })
  }
}
