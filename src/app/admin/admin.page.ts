import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../models/usuarios';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(public service: ServiceService, public alertController: AlertController ) { }
  id: any;
  usuario: any;
  modelo: Usuario = new Usuario;
  ngOnInit() {
    this.getUsuarios();
  } 
  async getUsuarios(){
    this.service.getUsu().then((data: any) =>{
      this.usuario = data.cont.usuario;
      console.log(this.usuario);
    }).catch(async err =>{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Peligro',
        message: 'No se encontraron usuarios.',
        buttons: ['OK']
      });
      await alert.present();
    })
  }
  async eliminar(){
    if(this.id == null){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Selecciona un "id" para poder realizar cambios',
        buttons: ['OK']
      });
      await alert.present();

    }else{

      this.service.deleteUsuarios(this.id).subscribe((data:any) => {
        this.usuario = data;
        console.log(this.usuario);
        this.service.getUsuarios().subscribe((data:any) => {
          this.usuario = data;            
        });
      })

    }
  }

  async select(idUser: string){
    this.id = idUser;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',            
      message: 'ID seleccionado',
      buttons: ['OK']
    });
    await alert.present();
    console.log(this.id);
    console.log(this.modelo);
  }
}
