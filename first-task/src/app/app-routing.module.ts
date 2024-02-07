import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }, { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
