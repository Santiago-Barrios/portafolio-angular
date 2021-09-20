import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPageService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string ){

    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
