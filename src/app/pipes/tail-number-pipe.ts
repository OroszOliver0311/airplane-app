import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tailNumber',
  standalone: true
})
export class TailNumberPipe implements PipeTransform {
  transform(value: string): string {
    if(!value) return value;

     return value.substring(0,1) + "-" + value.substring(1); 
  }
}
