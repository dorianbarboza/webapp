import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'practica1', loadChildren: './unidad1/practica1/practica1.module#Practica1PageModule' },
  { path: 'practica2', loadChildren: './unidad1/practica2/practica2.module#Practica2PageModule' },
  { path: 'api', loadChildren: './unidad2/api/api.module#ApiPageModule' },
  { path: 'menu', loadChildren: './unidad3/menu/menu.module#MenuPageModule' },
  { path: 'part1', loadChildren: './unidad3/part1/part1.module#Part1PageModule' },
  { path: 'part2', loadChildren: './unidad3/part2/part2.module#Part2PageModule' },
  { path: 'part3', loadChildren: './unidad3/part3/part3.module#Part3PageModule' },
  { path: 'part4', loadChildren: './unidad3/part4/part4.module#Part4PageModule' },
  { path: 'part5', loadChildren: './unidad3/part5/part5.module#Part5PageModule' },
  { path: 'part6', loadChildren: './unidad3/part6/part6.module#Part6PageModule' },
  { path: 'part7', loadChildren: './unidad3/part7/part7.module#Part7PageModule' },
  { path: 'part8', loadChildren: './unidad3/part8/part8.module#Part8PageModule' },
  { path: 'part9', loadChildren: './unidad3/part9/part9.module#Part9PageModule' },
  { path: 'part10', loadChildren: './unidad3/part10/part10.module#Part10PageModule' },
  { path: 'part11', loadChildren: './unidad3/part11/part11.module#Part11PageModule' },
  { path: 'part12', loadChildren: './unidad3/part12/part12.module#Part12PageModule' },
  { path: 'part13', loadChildren: './unidad3/part13/part13.module#Part13PageModule' },
  { path: 'part14', loadChildren: './unidad3/part14/part14.module#Part14PageModule' },
  { path: 'part15', loadChildren: './unidad3/part15/part15.module#Part15PageModule' },
  { path: 'part16', loadChildren: './unidad3/part16/part16.module#Part16PageModule' },
  { path: 'part17', loadChildren: './unidad3/part17/part17.module#Part17PageModule' },
  { path: 'part18', loadChildren: './unidad3/part18/part18.module#Part18PageModule' },
  { path: 'part19', loadChildren: './unidad3/part19/part19.module#Part19PageModule' },
  { path: 'part20', loadChildren: './unidad3/part20/part20.module#Part20PageModule' },
  { path: 'part21', loadChildren: './unidad3/part21/part21.module#Part21PageModule' },
  { path: 'part22', loadChildren: './unidad3/part22/part22.module#Part22PageModule' },
  { path: 'part23', loadChildren: './unidad3/part23/part23.module#Part23PageModule' },
  { path: 'part24', loadChildren: './unidad3/part24/part24.module#Part24PageModule' },
  { path: 'part25', loadChildren: './unidad3/part25/part25.module#Part25PageModule' },
  { path: 'part26', loadChildren: './unidad3/part26/part26.module#Part26PageModule' },
  { path: 'part27', loadChildren: './unidad3/part27/part27.module#Part27PageModule' },
  { path: 'part28', loadChildren: './unidad3/part28/part28.module#Part28PageModule' },
  { path: 'part29', loadChildren: './unidad3/part29/part29.module#Part29PageModule' },
  { path: 'part30', loadChildren: './unidad3/part30/part30.module#Part30PageModule' },
  { path: 'modal19', loadChildren: './unidad3/modal19/modal19.module#Modal19PageModule' },
  { path: 'login', loadChildren: './unidad/login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
