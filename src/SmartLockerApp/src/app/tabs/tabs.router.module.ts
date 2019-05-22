import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Notification',
        children: [
          {
            path: '',
            loadChildren: 'src/app/notification/notification.module#NotificationPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: 'src/app/account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: 'reserveer',
        children: [
          {
            path: '',
            loadChildren: 'src/app/reserveer/reserveer.module#ReserveerPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
