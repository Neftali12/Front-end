import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../models/usuarios';
import { ServiceService } from '../servicios/service.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {
  
  user: Usuario = new Usuario;
  respuesta: any;
  constructor(public alertController: AlertController, public router:Router, public service: ServiceService) { 
    
  }

  registroUsuario(){
    this.service.postUsuario(this.user).then((data: any)=>{
      this.respuesta= data;
      console.log(this.respuesta);
    });
  }

  // async SignIn(){
  //   this.router.navigate(['/new-page'],)};


  ngOnInit() {
  }

}
