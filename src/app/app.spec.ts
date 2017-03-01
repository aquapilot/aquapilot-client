/**
 * Created by sebastienvermeille on 01.03.17.
 */
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {AngularFire, AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './app-config';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp],

      providers: [
        AngularFire

      ],

      imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot(),
        AngularFireModule.initializeApp(FIREBASE_CONFIG)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MyApp);
    comp    = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('should be created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  });

  it('should initialize with a root page of LoginPage', () => {
    expect(comp['rootPage']).toBe(LoginPage);
  });

});
