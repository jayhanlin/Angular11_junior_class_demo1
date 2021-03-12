import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: string, icon: string): string {
    if (value && value.length > 5) {
      return value.substr(0, 3) + icon;
    } else {
      return icon;
    }
  }
}
