import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OpenClosePipe } from '../pipes/openClosePipe.pipe';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    declarations: [OpenClosePipe],
    exports: [
        OpenClosePipe,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class SharedModule {}
