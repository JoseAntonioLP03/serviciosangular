import { Injectable } from "@angular/core";
import { Persona } from "../app/models/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../app/global";
import { environment } from "../environments/environment.development";

@Injectable()
export class ServicePersonas{
    //Para poder realizar peticiones , necesitamos el objeto 
    //HttpClient.
    //Dicho objeto debemos inyectarlo en las clases que utilicemos con apis
    constructor(private _http: HttpClient){}
    getPersonas():Observable<any>{
        let urlApi = environment.apiPersonas;
        let request = "api/personas";
        return this._http.get(urlApi + request);
    }   

    getPersonasPromise(): Promise<any>{
        let urlApi = environment.apiPersonas;
        let request = "api/personas";
        let promise = new Promise((resolve) =>{
            this._http.get(urlApi+request).subscribe(response => {
                resolve (response)
            })
        })
        return promise
    }
}