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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
