import {ProviderService} from '../../app/provider.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.page.html',
  styleUrls: ['./komentar.page.scss'],
})
export class KomentarPage implements OnInit {
  Komentar: any;
  constructor(public api: ProviderService,public loadingController: LoadingController,public ProviderService: ProviderService) {
  
  }
  async getKomentars() {
    const loading = await this.loadingController.create({
      
    });
    await loading.present();
    await this.api.getKomentar()
      .subscribe(res => {
        console.log(res);
        this.Komentar = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getKomentars();
    
  }
  
  }