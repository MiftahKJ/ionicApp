import { Component, } from '@angular/core';
import {ProviderService} from '../../app/provider.service';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  
  

  constructor(public api: ProviderService,public loadingController: LoadingController,public ProviderService: ProviderService) {
  
}}