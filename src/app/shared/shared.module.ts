import { UiPanelsComponent } from './ui-panels/ui-panels.component';
import { UiPageHeadersComponent } from './ui-page-headers/ui-page-headers.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TopNavbarComponent,
        UiPageHeadersComponent,
        UiPanelsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        TopNavbarComponent
    ]
})
export class SharedModule {
    // static forRoot(): ModuleWithProviders {
    //   return {
    //     ngModule: SharedModule
    //   };
    // }
}
