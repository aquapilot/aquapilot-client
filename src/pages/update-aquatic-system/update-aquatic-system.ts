import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AquaticSystemType} from "../../models/aquatic-system-type";
import {AquaticSystemService} from "../../providers/aquatic-system-service";

/*
  Generated class for the UpdateAquaticSystem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update-aquatic-system',
  templateUrl: 'update-aquatic-system.html',
  providers:[AquaticSystemService]
})
export class UpdateAquaticSystemPage {

  public activeAquaticSystem;
  public aquaticSystemTypes: Array<string> = AquaticSystemType.names();

  public AquaticSystemType = AquaticSystemType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public aquaticSystemService: AquaticSystemService) {
    this.activeAquaticSystem = this.navParams.get('activeAquaticSystem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateAquaticSystemPage');

  }

  public onClickSaveButton(){
    this.aquaticSystemService.update(this.activeAquaticSystem);
  }

}
