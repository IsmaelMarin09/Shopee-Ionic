
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  productosSeleccionados: any[] = [];

  constructor(private router: Router) {}

  comprarProducto(nombre: string, precio: number) {
    const producto = { nombre, precio };
    this.productosSeleccionados.push(producto);
  }

  irAFacturacion() {
    this.router.navigate(['/tabs/tab3'], { queryParams: { productos: JSON.stringify(this.productosSeleccionados) } });
  }
}