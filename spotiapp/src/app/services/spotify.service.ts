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
      'Authorization':'Bearer BQBPiECgrkV3lk_TcvHlkw8JKUp2qXEP2dNfkThoNdWfncO7ZEl95Akt5UGxBebPQ8yofUKnJMmA-BaVhSjLSzVPgVLnXpUrNKR6wr51zOkFfH-yKhfzP2XbKDhwKu_MoPn8t90GVUg' //token dado por spotify 1hr
        });
        return this.http.get(url,{ headers });
  }

  getNewReleases(){  
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items));    
  }

  getArtista( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map ( data=> data['artists'].items));  
}

}
