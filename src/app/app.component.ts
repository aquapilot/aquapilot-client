import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Dashboard} from '../pages/dashboard/dashboard';
import {Settings} from '../pages/settings/settings';
import {LoginPage} from "../pages/login/login";
import {TranslateService} from "ng2-translate";
import {AquaticSystem} from "../models/aquatic-system";
import {NewAquaticSystemWizardPage} from "../pages/new-aquatic-system-wizard/new-aquatic-system-wizard";
import {AquaticSystemService} from "../providers/aquatic-system-service";
import {FirebaseListObservable} from "../../node_modules/angularfire2/database/firebase_list_observable";

@Component({
  templateUrl: 'app.html',
  providers: [AquaticSystemService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Dashboard;

  pages: Array<{title: string, component: any}>;

  public aquaticSystems$: FirebaseListObservable<any[]>;

  public aquaticSystems: AquaticSystem[];

  constructor(public platform: Platform, translateService: TranslateService, aquaticSystemService: AquaticSystemService) {

    this.rootPage = LoginPage;
    translateService.use('fr'); // TODO do it  according to device language settings
    this.initializeApp();


    this.aquaticSystems$ = aquaticSystemService.getAll();
    this.aquaticSystems$.subscribe(systems => {
        this.aquaticSystems = systems;
    });


    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Moniteur', component: Dashboard},
      {title: 'Réglages', component: Settings}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  onClickAddAquaticSystem() {
    this.nav.push(NewAquaticSystemWizardPage);
  }

  onSelectAquaticSystemInMenu(aquaticSystem:AquaticSystem){
    console.log(aquaticSystem);
    this.nav.setRoot(Dashboard, {'activeAquaticSystem':aquaticSystem});
  }
}
