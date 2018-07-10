import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

 /* paises: any[] = [];

  constructor (private http: HttpClient) {
    //propiedades del objeto http,  peticiones get de un Api de paises
    this.http.get('https://restcountries.eu/rest/v2/lang/es')//url con paises que hablan español 
    .subscribe ((resp: any) => {
      this.paises= resp; 
      console.log(resp);
    })
   }*/

   nuevasCanciones: any[] =[];

   constructor(private spotify:SpotifyService){
        
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
       console.log(data.albums.items);

       this.nuevasCanciones = data.albums.items;

     });
   }

  ngOnInit() {
  }

}
