import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../intefaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoChoose: ProductoDescripcion = {};
  id: string = '';

  constructor( private route: ActivatedRoute, 
               public productoServicio: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => {
        this.productoServicio.getProducto(parametros['id'])
            .subscribe( (producto: ProductoDescripcion) => {
              this.productoChoose = producto;
              this.id = parametros['id'];
            } )
      } )
  }

}
