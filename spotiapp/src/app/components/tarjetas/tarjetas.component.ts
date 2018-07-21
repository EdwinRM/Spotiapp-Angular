import { Component,Input } from '@angular/core';
import { Router } from '@angular/router'; //navegacion

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{

  @Input() items: any[]=[];

  constructor( private router:Router) { }//tener a disposicion los controles para redirecciones

  verArtista( item:any){
   
   let artistaId;
   if(item.type ==='artist'){
     artistaId = item.id;
   }else{
     artistaId = item.artists[0].id;
   }
   
   this.router.navigate(['/artist', artistaId])
   
    
  }

}
