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
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


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
        KeyFilterModule,
        ButtonModule,
        DropdownModule,
        InputTextModule
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
        KeyFilterModule,
        ButtonModule,
        DropdownModule,
        InputTextModule
    ],
})
export class SharedModule { }
