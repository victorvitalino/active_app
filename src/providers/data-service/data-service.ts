import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  /* Call JSON Data */
  getMenus(){
    // http://www.codhab.df.gov.br/portal/images/menus.json para testes no dispositivo.
    // /assets/data/menus.json testes local
    return this.http.get('assets/data/menus.json')
      .map((response: Response) => response)
  }
}
