import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';

import { PopInfoPage } from '../pop-info/pop-info.page';
import { PopInfoPageModule } from '../pop-info/pop-info.module';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  entryComponents:[
    PopInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PopInfoPageModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
