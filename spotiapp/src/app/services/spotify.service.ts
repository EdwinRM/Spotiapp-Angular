import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';

import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({ // decorador para importar el servicio de spotify automaticamente
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  console.log('Servicie listo Spotify');
  }

  getQuery( query: string){
    const url =`https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD04Yzy7z_ePKh-QNemBzdvuPv8Xb5XdvoKmeiHYlRMdZQ6bZnlFoWfYzESZWCJiA85_21ey5SEx3OO1tNTRJhNDGKIcO16bp0VOGp3GiwWCT2pZZ6cV-N2ZI0P_-sN9-feDpN4rlg' //token dado por spotify 1hr
        });
        return this.http.get(url,{ headers });
  }

  getNewReleases(){  
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items));    
  }

  getArtistas( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map ( data=> data['artists'].items));  
}
getArtista( id: string){

  return this.getQuery(`artists/${id}`);
  //.pipe( map ( data=> data['artists'].items));  
}

getToptracks( id: string){

  return this.getQuery(`artists/${id}/top-tracks?country=us`)
  .pipe( map ( data=> data['tracks']));  
}


}
