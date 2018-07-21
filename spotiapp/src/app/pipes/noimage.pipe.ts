import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {

    if(!images){
      return 'assets/img/noimage.png'; //consigo todo el arreglo y si no tiene imagen mando esta
    }

    if( images.length > 0){
      return images[0].url; //mando la img correpondiente
    }else{
      return 'assets/img/noimage.png';
    }

  }

}
