import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../models/usuarios';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;
  modelo: Usuario = new Usuario;

  constructor(public alertController: AlertController, public router: Router, public service: ServiceService ) { 
    this.usuario = this.password = "";
  }

  // async logIn(){
  //   if(this.usuario == 'admin' && this.password == '3526'){
  //     //Las credenciales son correctas
  //    let navExtras:NavigationExtras = {
  //      queryParams:{
  //        userName:this.usuario
  //      }
  //    }
  //    let infoUser = {
  //      userName: this.usuario,
  //      correo: 'user@gamil.com',
  //      tipoUser: 'admin'
  //    }
  //    localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
  //    this.router.navigate(['/tabs/tab2'], navExtras)

  //   } else {
  //     if(this.usuario == 'Diana' && this.password == 'nefta'){
  //       //Las credenciales son correctas
  //      let navExtras:NavigationExtras = {
  //        queryParams:{
  //          userName:this.usuario
  //        }
  //      }
  //      let infoUser = {
  //        userName: this.usuario,
  //        correo: 'user@gamil.com',
  //        tipoUser: 'admin'
  //      }
  //      localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
  //      this.router.navigate(['/tabs/tab2'], navExtras)
    
  //     } else {
  //       const alert = await this.alertController.create({
  //         cssClass: 'my-custom-class',
  //         header: 'ERROR',
  //         message: 'Datos incorrectos',
  //         buttons: ['OK']
  //       });
    
  //       await alert.present();
  //     }
  //   }
    
  // }
  
  async logIn(){
    this.service.login(this.modelo).then((data:any) => {
      
      this.usuario= data.usr.typeUser;
      console.log(this.usuario);
      if(this.usuario=="Usuario"){
        this.router.navigate(['/tabs'])
      }
      if(this.usuario=="Administrador"){
        this.router.navigate(['/admin'])
      }
    }).catch(async err =>{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Peligro',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });
      await alert.present();
      console.log(err)
    })
    console.log(this.modelo);
    
  }
  ngOnInit() {
  }

}
