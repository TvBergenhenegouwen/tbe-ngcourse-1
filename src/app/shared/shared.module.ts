import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../material.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        DashboardComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
    ],
    exports: [
        HttpClientModule,
        MaterialModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
