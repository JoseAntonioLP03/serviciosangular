import { Component , OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ServicePersonas } from '../../../services/service.personas';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personas-standalone.html',
  styleUrl: './personas-standalone.css',
  providers:[ServicePersonas],
  imports:[NgFor,NgIf]
})
export class PersonasStandalone implements OnInit {
  public personas!: Array<Persona>;
  constructor(private _service:ServicePersonas) {
  }

  ngOnInit(): void {
    this._service.getPersonasPromise().then(response => {
      console.log("Leyendo")
      this.personas = response
    })
    // this._service.getPersonas().subscribe(response => {
    //   console.log("Leyendo")
    //   this.personas = response
    // })
  }

}