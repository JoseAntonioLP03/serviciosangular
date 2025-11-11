import { Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../../services/service.coches';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches-component',
  standalone: false,
  templateUrl: './coches-component.html',
  styleUrl: './coches-component.css',
})
export class CochesComponent implements OnInit{
  public coches!: Array<Coche>;

  constructor(private _service: ServiceCoches) {}

  ngOnInit(): void {
    this._service.getCoches().then(response =>{
      this.coches = response;
    })
  }
}
