import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MainLayaoutComponent } from './main-layaout/main-layaout.component';
import { TopbarComponent } from './top-bar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from './service/app.config.service';
import { MenuService } from './service/app.menu.service';

import { ToolbarModule } from 'primeng/toolbar';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { HttpClientModule } from '@angular/common/http';
import { CnsRoutesComponent } from './cns-routes-component';
import { CnsMenuComponent } from './menu/cns.menu.component';
import { CnsMenuitemComponent } from './menu/cns.menuitem.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer',
    },
    {
        path: 'customer',
        component: MainLayaoutComponent,
        loadChildren: () =>
            import('../modules/customer/customer.module').then(m => m.CustomerModule),
    },
    { path: '**', redirectTo: 'customer' },
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { useHash: true }),
        BrowserAnimationsModule,
        FormsModule,
        StyleClassModule,
        ButtonModule,
        ToolbarModule,
        RadioButtonModule,
        RippleModule,
        InputSwitchModule,
        MenuModule,
        HttpClientModule,
    ],
    declarations: [
        CnsRoutesComponent,
        MainLayaoutComponent,
        TopbarComponent,
        CnsMenuComponent,
        CnsMenuitemComponent,
    ],
    exports: [CnsRoutesComponent],
    providers: [ConfigService, MenuService],
})
export class CoreModule {}
