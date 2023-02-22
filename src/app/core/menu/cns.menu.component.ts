import { Component, OnInit } from '@angular/core';
import { MainLayaoutComponent } from '../main-layaout/main-layaout.component';

@Component({
    selector: 'cns-menu',
    templateUrl: './cns.menu.component.pug',
    styleUrls: ['./cns.menu.component.scss'],
})
export class CnsMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: MainLayaoutComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Challenge-Admin',
                items:[
                    {label: 'Customer',icon: 'pi pi-fw pi-user', routerLink: ['/customer']},
                    
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
