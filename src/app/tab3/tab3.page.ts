import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdPage } from '../prod/prod.page'
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario:string;
  resultado = this.service.resulProd;
  

  constructor(public activeRoute:ActivatedRoute, public router:Router, public service: ServiceService) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
  }

  ngOnInit(){
    this.service.getProductos().then((data:any) => {
      this.resultado = data;
      console.log(this.resultado);
    });
    // console.log(this.service.resulProd);
  }


  // logout(){
  //   localStorage.removeItem('infoUserFacebook');
  //   this.router.navigate(['/'])
  // }

  btnProd(){
    this.router.navigate(['/prod']);
  }
}
