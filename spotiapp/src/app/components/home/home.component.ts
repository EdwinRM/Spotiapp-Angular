import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

   nuevasCanciones: any[] =[];
   loading: boolean;


   constructor(private spotify:SpotifyService){
   
    this.loading =true; //bandera cargando 


    this.spotify.getNewReleases()
    .subscribe( (data:any) => {     
       this.nuevasCanciones = data;
       this.loading = false; 
     });
   }

  ngOnInit() {
  }

}
