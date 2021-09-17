import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    //Cargar Productos
    this.http.get<Producto[]>('https://angular-html-5fd2d-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {

        this.productos = resp;
        this.cargando = false;

      })

  }
}
