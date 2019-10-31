
import {ProviderService} from '../../app/provider.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage  {
  ARTIKEL: any;
  constructor(public api: ProviderService,public loadingController: LoadingController,public ProviderService: ProviderService) {
  
  }
  async getClassrooms() {
    const loading = await this.loadingController.create({
      
    });
    await loading.present();
    await this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.ARTIKEL = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getClassrooms();
    
  }
  
  }