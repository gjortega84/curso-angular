import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nuevo'
})
export class NuevoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
