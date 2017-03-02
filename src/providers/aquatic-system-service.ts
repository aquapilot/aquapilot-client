import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AquaticSystem } from '../models/aquatic-system';
import 'rxjs/add/operator/map';
import {AquaticSystemType} from "../models/aquatic-system-type";
import {AngularFire} from "../../node_modules/angularfire2/angularfire2";
import {FirebaseListObservable} from "../../node_modules/angularfire2/database/firebase_list_observable";
import {FirebaseObjectObservable} from "angularfire2";

/**
 * AquaticSystemService manage all stuff  related to aquatic systems and firebase (CRUD)
 */
@Injectable()
export class AquaticSystemService {


  private aquaticSystemsObservable: FirebaseListObservable<any[]>;

  constructor(public angularFire: AngularFire) {
    console.debug('AquaticSystemService Instanciated');
  }

  public save(_name:string, _type:AquaticSystemType){

    var systemToSave = new AquaticSystem(_name, _type);
    this.getAll().push(systemToSave);

  }

  public update(aquaticSystem:AquaticSystem){
    var system: FirebaseObjectObservable<AquaticSystem>;
    system = this.angularFire.database.object("/systems/" + aquaticSystem.$key);
    system.update(aquaticSystem);
  }

  public delete(aquaticSystem:AquaticSystem){
    var system: FirebaseObjectObservable<AquaticSystem>;
    system = this.angularFire.database.object("/systems/" + aquaticSystem.$key);
    system.remove();
  }

  public getAll(){
    this.aquaticSystemsObservable = this.angularFire.database.list('/systems/', {
      query: {
      }
    });

    return this.aquaticSystemsObservable;
  }

}
