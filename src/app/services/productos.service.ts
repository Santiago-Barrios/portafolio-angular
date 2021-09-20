import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/producto.interface';
import { ProductoDescripcion } from '../intefaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise<void>((resolve, reject) => {
      
      //Cargar Productos
      this.http.get<Producto[]>('https://angular-html-5fd2d-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
  
          this.productos = resp;
          this.cargando = false;
          resolve();
        });

    });


  }

  getProducto(id:string){
    return this.http.get<ProductoDescripcion>(`https://angular-html-5fd2d-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if ( this.productos.length === 0 ){

      this.cargarProductos().then( () => {

        this.filtrarProductos(termino);

      } );
    }else{
      this.filtrarProductos(termino);
    }


  }

  private filtrarProductos(termino: string){
    console.log(this.productos);
    this.productoFiltrado=[];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productoFiltrado.push(prod);
      }
    } );
  }

}
