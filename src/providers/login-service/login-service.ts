import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient, private nativeStorage:NativeStorage, ) {
    console.log('Hello LoginServiceProvider Provider');
  }

  insertData(cpf,senha,latitude){
    return this.nativeStorage.setItem('Login', { cpf: cpf, senha: senha, latitude: latitude })
      .then( () => console.log('Sucesso'),
      error => console.error('Error storing item', error)
      );
      
  }
  getData(){
    return this.nativeStorage.getItem('Login').then(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
