import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Part29Page } from './part29.page';

const routes: Routes = [
  {
    path: '',
    component: Part29Page,

    children: [
    {
    path: 'schedule',
    loadChildren: '../part17/part17.module#Part17PageModule'
  },
  {
  path: 'speakers',
  loadChildren: '../part1/part1.module#Part1PageModule'
  },
  {
  path: 'map',
  loadChildren: '../part2/part2.module#Part2PageModule'
  },
  {
  path: 'about',
  loadChildren: '../part3/part3.module#Part3PageModule'
  }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Part29Page]
})
export class Part29PageModule {}
