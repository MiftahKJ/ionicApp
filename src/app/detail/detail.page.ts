import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ProviderService} from '../provider.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  ARTIKEL: any = {};
  constructor(public api: ProviderService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router) { }
    async getClassroom() {
      const loading = await this.loadingController.create({
        
      });
      await loading.present();
      await this.api.getClassroomById(this.route.snapshot.paramMap.get('id'))
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
      this.getClassroom();
    }

}
