import { Coche } from "../app/models/coche";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment.development";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCoches{
    constructor(private _http: HttpClient) {}

    // //CON HTTP CLIENT
    // getCochesHttpClient(): Observable<Array<Coche>>{
    //     let request = "webresources/coches";
    //     let url = environment.apiCoches + request;
    //     return this._http.get(url)
    // }

    // //CON FECTH CON PROMISE
    // getCochesPromise():Promise<Array<Coche>>{
    //     let request = "webresources/coches";
    //     let url = environment.apiCoches + request;
    //     let promise = new Promise((resolve)=>{
    //         fetch(url).then(response =>{
    //             resolve(response.json)
    //         })
    //     })
    //     return promise;
    // }


    //CON HTTP CLIENT
    getCoches(): Promise<Array<Coche>>{
        let request = "webresources/coches";
        let url = environment.apiCoches + request;
        //Extraer los datos tenemos que hacerlo
        const coches = fetch(url).then(response => response.json())
        return coches;
    }


}