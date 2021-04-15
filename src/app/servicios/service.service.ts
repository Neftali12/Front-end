import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }


  url = 'mongodb+srv://DMM:Nefta-Diana@cluster0.29r8p.mongodb.net/appShop'
  resulProd: any;

  login(usuario){
    return this.http.post('http://localhost:3000/api/login', usuario).toPromise();
  }
  getUsuarios(){
    return this.http.get('http://localhost:3000/api/usuarios');
  }  
  getUsu(){
    return this.http.get('http://localhost:3000/api/usuarios').toPromise();
  }  
  postUsuario(usuario: Usuario){
    return this.http.post(`http://localhost:3000/api/usuarios`, usuario).toPromise();
  }  

  getProductos(){
  return this.http.get(`http://localhost:3000/api/productos`).toPromise();
  }  
  postProductos(producto: Producto){
    return this.http.post(`http://localhost:3000/api/productos`, producto);
  }  
  putProductos(idProducto: any, producto: Producto){
    return this.http.put(`http://localhost:3000/api/productos/?idProducto=${idProducto}`, producto);
  }
  deleteProductos(idProducto: any){
    return this.http.delete(`http://localhost:3000/api/productos/?idProducto=${idProducto}`);
  }
  deleteUsuarios(idUsuario: any){
    return this.http.delete(`http://localhost:3000/api/usuarios/?idUsuario=${idUsuario}`);
  }
}
