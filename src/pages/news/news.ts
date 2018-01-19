import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: './show.html',
})
export class NewsPage {
  news: any;
  news_sliders: any;
  // new_id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private data:DataServiceProvider) {

    // Disparo do provider para pegar as Notícias
    this.data.getNews()
      .subscribe((response) => {
        this.news = response.posts;
        this.news_sliders = response.sliders;
        console.log(this.news);
        console.log(this.news_sliders);
      });
  }  

  gotoSingle(new_id){
    this.navCtrl.push('NewsinglePage', {new_id})
  }
}
