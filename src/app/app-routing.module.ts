import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InformacionComponent },
  { path: 'info', component: InformacionComponent },
  { path: 'ruta/:id', component: RutaComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
