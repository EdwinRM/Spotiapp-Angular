import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable({ // decorador para importar el servicio de spotify automaticamente
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
  console.log('Servicie listo Spotify');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB8Kmh3EIFm-JsK6WWbWcrxeKva43YsQ1FF_SDRsjvpUQHXUPMvpgK2KhZP7rBlZ3UJ8EGXYOuz5MCax8k' //token dado por spotify 1hr
        });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });//peticion http.get
  }
getArtista( termino: string){
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQB8Kmh3EIFm-JsK6WWbWcrxeKva43YsQ1FF_SDRsjvpUQHXUPMvpgK2KhZP7rBlZ3UJ8EGXYOuz5MCax8k' //token dado por spotify 1hr
      });

  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers }); 
}

}
