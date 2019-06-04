import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/unidad3/modal/modal.component';

@Component({
  selector: 'app-part19',
  templateUrl: './part19.page.html',
  styleUrls: ['./part19.page.scss'],
})
export class Part19Page implements OnInit {

  constructor(private  modalCtrl:ModalController) { }

  ngOnInit(){}

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    })
    await modal.present();
  }

}
