import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../intefaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;
  equipo:any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    // Leer el archivo JSON
    this.http.get<InfoPage>('assets/data/data-page.json')
        .subscribe( (resp: InfoPage) => {
          this.cargada = true;
          this.info = resp;
        });
   }

   private cargarEquipo(){
    // Leer el archivo JSON
    this.http.get<any[]>('https://angular-html-5fd2d-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) => {
          this.equipo = resp;
        });
   }

}
