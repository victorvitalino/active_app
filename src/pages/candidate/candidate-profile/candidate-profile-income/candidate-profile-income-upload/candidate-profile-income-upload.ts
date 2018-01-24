import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-candidate-profile-income-upload',
  templateUrl: 'candidate-profile-income-upload.html',
})
export class CandidateProfileIncomeUploadPage {
  imageURI: string;
  imageFileName: string;

  private typewriter_text: string = "<br><h1 class='text-center'><b>Tire a foto do seu documento</h1></b><br>" +
    "<h4><p>Basta Clicar em Tirar foto</p>" +
    "<p>*Verifique se está legível e nos envie clicando em atualizar.</b></p></h4>"

  private typewriter_display: string = "";

  private enable_next_button: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
  }
  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 40, that);
    } else {
      that.enable_next_button = true;
    }
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Enviando..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
        console.log(this.imageURI);
        console.log(data + " Uploaded Successfully");
        this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Imagem enviada com sucesso");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
  }
  
  goToIncomeDone() {
    this.navCtrl.push("CandidateProfileIncomeDonePage")
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });
 
    toast.onDidDismiss(() => {
      console.log('Mensagem Fechada');
    });

    toast.present();
  }
}