import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AquaticSystemType} from "../../models/aquatic-system-type";
import {AquaticSystemService} from "../../providers/aquatic-system-service";

/*
  Generated class for the NewAquaticSystemWizard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-aquatic-system-wizard',
  templateUrl: 'new-aquatic-system-wizard.html',
  providers:[AquaticSystemService]
})
export class NewAquaticSystemWizardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public aquaticSystemService: AquaticSystemService) {}

  public aquaticSystemTypes: Array<string> = AquaticSystemType.names();

  public aquaponicSystemName: string;
  public selectedAquaponicSystemType: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAquaticSystemWizardPage');
  }

  public onClickSaveButton(){
    this.aquaticSystemService.save(this.aquaponicSystemName, AquaticSystemType.valueOf(this.selectedAquaponicSystemType));
  }

}
