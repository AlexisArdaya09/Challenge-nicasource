import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { MainLayaoutComponent } from '../main-layaout/main-layaout.component';

@Component({
    selector: 'cns-topbar',
    templateUrl: './topbar.component.pug',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
    items: MenuItem[];
    userName: string = 'Alexis Ardaya';

    constructor(
        public appMain: MainLayaoutComponent,
    ) {}

    ngOnInit() {
        
    }
}
