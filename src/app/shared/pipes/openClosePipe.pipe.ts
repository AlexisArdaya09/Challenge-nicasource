import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'openClosePipe' })
export class OpenClosePipe implements PipeTransform {
    transform(value: boolean): string {
        let newStr: string = '';
        newStr = value ? 'Abierto' : 'Cerrado';
        return newStr;
    }
}
