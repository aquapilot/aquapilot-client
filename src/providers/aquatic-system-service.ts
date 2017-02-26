import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AquaticSystem } from '../models/aquatic-system';
import 'rxjs/add/operator/map';
import {AquaticSystemType} from "../models/aquatic-system-type";
import {AngularFire} from "../../node_modules/angularfire2/angularfire2";
import {FirebaseListObservable} from "../../node_modules/angularfire2/database/firebase_list_observable";

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

    // TODO: Implement it
   // var systemToUpdate = aquaticSystem.key;
   // this.getAll().update(systemToUpdate.uuid, systemToUpdate);

  }

  public getAll(){
    this.aquaticSystemsObservable = this.angularFire.database.list('/systems/', {
      query: {
      }
    });

    return this.aquaticSystemsObservable;
  }

}
