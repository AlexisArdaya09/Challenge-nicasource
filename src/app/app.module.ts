import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CnsRoutesComponent } from './core/cns-routes-component';
import { CoreModule } from './core/core-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability:  true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [CnsRoutesComponent]
})
export class AppModule { }
