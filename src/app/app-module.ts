import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PersonasapiComponent } from './components/personasapi-component/personasapi-component';
import { ServicePersonas } from '../services/service.personas';
import { PersonasStandalone } from './components/personas-standalone/personas-standalone';
import { ServiceCoches } from '../services/service.coches';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillaComponent } from './components/plantilla-component/plantilla-component';
import { ServicePlantillas } from '../services/service.plantillas';
import { FormsModule } from '@angular/forms';
import { PlantillaFuncionmultiple } from './components/plantilla-funcionmultiple/plantilla-funcionmultiple';


@NgModule({
  declarations: [
    App,
    PersonasapiComponent,
    CochesComponent,
    PlantillaComponent,
    PlantillaFuncionmultiple,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandalone,
    FormsModule
  ],
  providers: [
    ServicePlantillas,
    ServiceCoches,
    ServicePersonas,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
