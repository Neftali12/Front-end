import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuario:string;

  constructor(public activeRoute:ActivatedRoute, public router:Router) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
  }

  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }
  
}

export class LikesCount{

  LikeValue: number;
  DislikeValue: number;
  
    constructor(){
    this.LikeValue = 0;
    this.DislikeValue = 0;
    }
  
    handleLike(){
     this.LikeValue++;
    }
    handleDislike(){
     this.DislikeValue++;
    }
  }
  