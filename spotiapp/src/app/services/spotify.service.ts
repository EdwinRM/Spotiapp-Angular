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
      'Authorization':'Bearer BQC8g3hCL4WsYTfnuLrs7xjecZsxV5vxns37AjY8HFEoP8K4nVnNfBKdp6xeQk8OpyKLN7ZJNCj6P4jHbO8TIjmjqIznrs23WA0QrdtzaEFC7_3exmSOn-ClYP3V32oQ2SD5aJyxSvQ' //token dado por spotify 1hr
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
