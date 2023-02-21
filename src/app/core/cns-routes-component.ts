import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'cns-routes',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None,
})
export class CnsRoutesComponent implements OnInit {
    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
