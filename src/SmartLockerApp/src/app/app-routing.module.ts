import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'reserveer', loadChildren: './reserveer/reserveer.module#ReserveerPageModule' },
  { path: '', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'reserveren/:id', loadChildren: './reserveren/reserveren.module#ReserverenPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
