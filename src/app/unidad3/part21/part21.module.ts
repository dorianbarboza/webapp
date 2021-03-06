import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Part21Page } from './part21.page';
/*
import { PopInfoPage } from '../pop-info/pop-info.page';
import { PopInfoPageModule } from '../pop-info/pop-info.module';*/



const routes: Routes = [
  {
    path: '',
    component: Part21Page
  }
];

@NgModule({/*
  entryComponents:[
    PopInfoPage
  ],*/
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  //  PopInfoPageModule
  ],
  declarations: [Part21Page]
})
export class Part21PageModule {}
