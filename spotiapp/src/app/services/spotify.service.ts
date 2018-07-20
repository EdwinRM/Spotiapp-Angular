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

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBPiECgrkV3lk_TcvHlkw8JKUp2qXEP2dNfkThoNdWfncO7ZEl95Akt5UGxBebPQ8yofUKnJMmA-BaVhSjLSzVPgVLnXpUrNKR6wr51zOkFfH-yKhfzP2XbKDhwKu_MoPn8t90GVUg' //token dado por spotify 1hr
        });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })//peticion http.get
    .pipe( map( data => {
      return data['albums'].items;
    }));
  }
getArtista( termino: string){
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQBxwBdEMvVV2JeZ0-OFjtLX2yClMjGX0hrprLQKPnLKpSM5GOzTMHLEl7mAGxCZxp06vDx-NXChtDQxjPFgOvULJTWy03pd-CORGhP2KtXdsf33ilG0jchNmV9_RUWIx1QgdxNw5XE' //token dado por spotify 1hr
      });

  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
  .pipe(map (data => data['artists'].items)
  
}

}
