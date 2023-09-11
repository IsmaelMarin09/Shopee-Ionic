import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  


  productos: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const productosParam = params['productos'];
      if (productosParam) {
        this.productos = JSON.parse(productosParam);
      }
    });
  }
  eliminarProducto(producto: any) {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
        this.productos.splice(index, 1);
    }
}
}
