import { Routes } from '@angular/router';
import { AppRoute } from './app.route';

export const routes: Routes = [
  {
    path: AppRoute.CHANGE_DETECTION,
    loadComponent: () =>
      import('./change-detection/change-detection.component').then(
        (m) => m.ChangeDetectionComponent,
      ),
  },
  {
    path: AppRoute.VIEW_CHILD,
    loadComponent: () =>
      import('./view-child/view-child.component').then(
        (m) => m.ViewChildComponent,
      ),
  },
];
