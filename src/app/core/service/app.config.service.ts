import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../config-template/appconfig';

@Injectable()
export class ConfigService {
    config: AppConfig = {
        dark: false,
        inputStyle: 'outlined',
        ripple: true,
        theme: 'vela-purple',
    };

    private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }
}
