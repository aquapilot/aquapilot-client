/**
 * Created by sebastienvermeille on 01.03.17.
 */
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { LoginPage } from './login';
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {AngularFire, AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './../../app/app-config';
import {NavController} from 'ionic-angular';

let comp: LoginPage;
let fixture: ComponentFixture<LoginPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Login', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp, LoginPage],

      providers: [
        NavController
      ],

      imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot(),
        AngularFireModule.initializeApp(FIREBASE_CONFIG)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginPage);
    comp    = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('should be created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  });

  it('should display a login form', () => {

    de = fixture.debugElement.query(By.css('form ion-input'));
    el = de.nativeElement;
    expect(el.textContent).toBeDefined(true);
  });

  it('should provide a link to register', () => {
    !expect(comp['title']).toBeDefined();
  });

  it('should be able to set the title to a supplied value', () => {

    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;

   // comp.changeTitle('Your Page');
    fixture.detectChanges();
    expect(comp['title']).toEqual('Your Page');
    expect(el.textContent).toContain('Your Page');

  });

});
