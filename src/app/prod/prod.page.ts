import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Producto } from '../models/productos';
import { ServiceService } from '../servicios/service.service';


@Component({
  selector: 'app-prod',
  templateUrl: './prod.page.html',
  styleUrls: ['./prod.page.scss'],
})
export class ProdPage implements OnInit {

  prod: Producto = new Producto;
  producto: any;
  id: any;
  tempImg: string;
  constructor(public service: ServiceService, public alertController: AlertController, public  router: Router){
    
  }

  ngOnInit() {           
    this.service.getProductos().then((data:any) => {
      this.producto = data;
      console.log(this.producto);
    });
  }


  async altaProducto(form: NgForm){      
    if(this.prod.nombre == null, this.prod.nombreMarca == null, this.prod.descripcion == null, this.prod.precio == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        message: 'Agregue información a todos los inputs antes de continuar',
        buttons: ['OK']
      });
      await alert.present();
    }else{

      if(this.prod.nombre == "", this.prod.nombreMarca == "", this.prod.descripcion == "", this.prod.precio == 0){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Mensaje',            
          message: 'Para volver a dar de alta un producto agregue información',
          buttons: ['OK']
        });
        await alert.present();
      }else{        
        this.service.postProductos(this.prod).subscribe(data => {   
          this.producto =  data;           
          console.log(data);           
          this.service.getProductos().then((data:any) => {
            this.producto = data;            
          });
        });
        this.prod.nombre = this.prod.nombreMarca = this.prod.descripcion ="";
        this.prod.precio == 0;

      }
    }  
  }

  async editar(form: NgForm){
    if(this.id == null){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Selecciona un "id" para poder realizar cambios',
        buttons: ['OK']
      });
      await alert.present();

    }else{

      this.service.putProductos(this.id, this.prod).subscribe((data:any) => {
        this.producto = data;
        console.log(this.producto);
        this.service.getProductos().then((data:any) => {
          this.producto = data;            
        });
      })

    }
  }

  async cerrarSesion(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar Sesion',            
      message: '¿Estas seguro de Cerrar Sesion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/home']);
            console.log('Confirm Okay');
          }
        }
      ]
    });    
    await alert.present();
    
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

      this.service.deleteProductos(this.id).subscribe((data:any) => {
        this.producto = data;
        console.log(this.producto);
        this.service.getProductos().then((data:any) => {
          this.producto = data;            
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
    console.log(this.prod);
  }
  // camara() {
  //   const options: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     correctOrientation: true,
  //     sourceType: this.camera.PictureSourceType.CAMERA
  //   };
  //   this.camera.getPicture(options).then( ( imageData ) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.tempImg = base64Image;
  //    }, (err) => {
  //     // Handle error
  //    });
  // }

  
}

