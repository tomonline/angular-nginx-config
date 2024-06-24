import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/app-config/app-config.component').then(m => m.AppConfigComponent)
    }
];
