import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ProviderService} from '../provider.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detailkomentar',
  templateUrl: './detailkomentar.page.html',
  styleUrls: ['./detailkomentar.page.scss'],
})
export class DetailkomentarPage implements OnInit {
  Komentar: any = {};
  constructor(public api: ProviderService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router) { }
    async getKomentar() {
      const loading = await this.loadingController.create({
        
      });
      await loading.present();
      await this.api.getKomentarById(this.route.snapshot.paramMap.get('id'))
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
      this.getKomentar();
    }

}