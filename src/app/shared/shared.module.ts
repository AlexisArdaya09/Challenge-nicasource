import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { CnsLoaderModule } from './components/cns-loader/cns-loader.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ToolbarModule } from 'primeng/toolbar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageService } from 'primeng/api';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ToastModule,
        DividerModule,
        TableModule,
        StyleClassModule,
        CnsLoaderModule,
        ConfirmDialogModule,
        VirtualScrollerModule,
        ToolbarModule,
        KeyFilterModule
    ],
    providers: [MessageService],
    declarations: [],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        ToastModule,
        DividerModule,
        TableModule,
        StyleClassModule,
        CnsLoaderModule,
        ConfirmDialogModule,
        VirtualScrollerModule,
        ToolbarModule,
        KeyFilterModule
    ],
})
export class SharedModule { }
