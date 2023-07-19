import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rutas, RutasService } from 'src/app/service/rutas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private rutas: RutasService, private router: Router) { }
  ruta: Rutas[] = [];
  ngOnInit(): void {
    this.ruta = this.rutas.getRutas();
  }
  verRutas(idx: number) {
    console.log(idx);
      this.router.navigate(['/ruta',idx]);
  }
}
