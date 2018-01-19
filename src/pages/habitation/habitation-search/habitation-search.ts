import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HabitationProvider } from '../../../providers/habitation/habitation';


@IonicPage()
@Component({
  selector: 'page-habitation-search',
  templateUrl: './show.html',
})
export class HabitationSearchPage {
candidate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:HabitationProvider) {
  }

  searchCandidate(value){
    this.data.getCandidate(value)
      .subscribe((response) => {
        this.candidate = response;
        console.log(this.candidate);
        // console.log("fdp" + this.candidate.basic_information.name)
      });
  }
}
