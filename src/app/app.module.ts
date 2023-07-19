import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { RutasService } from './service/rutas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InformacionComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RutasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
