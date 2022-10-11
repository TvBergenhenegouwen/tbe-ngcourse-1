import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../material.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
    ],
    declarations: [
    ],
    exports: [
        HttpClientModule,
        MaterialModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
