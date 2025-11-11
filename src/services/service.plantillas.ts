import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empleado } from "../app/models/empleado";

@Injectable()
export class ServicePlantillas{

    constructor(private _http: HttpClient) {
        
    }

    getFunciones():Observable<Array<string>>{
        let request = "api/plantilla/funciones";
        let url = environment.apiPlantillas + request;
        return this._http.get<Array<string>>(url);
    }

    getPlantillaFuncion(funcion:string):Promise<Array<Empleado>>{
        let request = "api/plantilla/plantillafuncion/"+funcion;
        let url = environment.apiPlantillas + request;
        const plantillas = fetch(url).then(response => response.json());
        return plantillas
    }

    getPlantillaFunciones(funciones: Array<string>):Observable<Array<Empleado>>{
        //?funcion=Enfermero&funcion=Enfermera
        let datos = "";
        for(var funcion of funciones){
            datos += "funcion="+funcion+"&";
            //?funcion=Enfermero&funcion=Enfermera&
        }
        //Quitamos el ultimo caracter
        datos = datos.substring(0,datos.length-1);
        let request = "api/plantilla/plantillafunciones?"+datos;
        let url = environment.apiPlantillas + request;
        return this._http.get<Array<Empleado>>(url);
    }

}