import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MtbPersonListComponent } from './mtb-person-list/mtb-person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MtbPersonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
