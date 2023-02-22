import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CnsRoutesComponent } from './core/cns-routes-component';
import { CoreModule } from './core/core-routing.module';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState, ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/effects/customer.effects';
import { loadInitialCustomerData } from './state/actions/customer.action';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([CustomerEffects])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          store.dispatch(loadInitialCustomerData());
        };
      },
      multi: true,
      deps: [Store]
    }
  ],
  bootstrap: [CnsRoutesComponent]
})
export class AppModule { }
