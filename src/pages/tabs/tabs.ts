import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Dashboard} from "../dashboard/dashboard";
import {Settings} from "../settings/settings";
import {AquaticSystem} from "../../models/aquatic-system";

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabSettings: any = Settings;
  tabMeasures: any = Dashboard;
  currentTabIndex: number = 0;
  activeAquaticSystem: AquaticSystem;

  constructor(public nav: NavController, params:NavParams) {
    // TODO: pass params to dashboard and settings
    console.log(params);
    this.activeAquaticSystem = params.data;

  }

}
