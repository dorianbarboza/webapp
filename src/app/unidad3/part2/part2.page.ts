import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.page.html',
  styleUrls: ['./part2.page.scss'],
})
export class Part2Page{

  titulo: string;

  constructor(public alertController: AlertController) { }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Introduce su nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'txtApellido',
          type: 'text',
          placeholder: 'Apellido'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }


}
