import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },

    { path: 'not-found', component: NotFoundComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
