import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CnsRoutesComponent } from './core/cns-routes-component';
import { CoreModule } from './core/core-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [CnsRoutesComponent]
})
export class AppModule { }
