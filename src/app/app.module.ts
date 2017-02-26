import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import 'chart.js/dist/Chart';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app-config'
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Settings } from '../pages/settings/settings';
import { ProgressbarModule } from "ng2-bootstrap";
import { RoundProgressModule } from "angular-svg-round-progressbar/dist/round-progress";
import { LightingPage } from "../pages/lighting/lighting";
import { WaterPage } from "../pages/water/water";
import { AirPage } from "../pages/air/air";
import {LoginPage} from "../pages/login/login";
import {TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import {Http} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    Settings,
    LightingPage,
    WaterPage,
    AirPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    ChartsModule,
   ProgressbarModule.forRoot(),
    RoundProgressModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    Settings,
    LightingPage,
    WaterPage,
    AirPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
