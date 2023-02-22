import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CnsLoaderComponent } from './cns-loader.component';

@NgModule({
    imports: [CommonModule, ProgressSpinnerModule],
    declarations: [CnsLoaderComponent],
    exports: [CnsLoaderComponent],
})
export class CnsLoaderModule {}
