import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  louding:boolean;
  
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.louding=true;

    this.router.params.subscribe( params =>{
      this.getArtist(params['id']);  
      this.getTopTracks(params['id']);   
      
    }); //prametros recibidos por el url    
   }

   getArtist(id:string){
    this.louding=true;
this.spotify.getArtista( id )
.subscribe( artista => {
console.log(artista);
this.artista=artista;
this.louding=false;
});

   }
  
getTopTracks( id:string ){

this.spotify.getToptracks( id )//lo obtenos del servicio en spotify.service.ts
.subscribe( topTracks =>{
console.log(topTracks);
this.topTracks = topTracks;
});
}



}
