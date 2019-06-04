import { Component, OnInit } from '@angular/core';
import { PopInfoPage } from '../pop-info/pop-info.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopInfoPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
