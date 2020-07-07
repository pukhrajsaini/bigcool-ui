import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  },
  {
    path: 'bigcooladminexpert', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**', loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
