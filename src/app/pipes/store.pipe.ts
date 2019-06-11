import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'store'
})
export class StorePipe implements PipeTransform {

 transform(args1:number, args2:number): any {
    if (args1 != null && args2 != null) {
      return args1 * args2;
    } else {
      console.log('Erro en el');
    }
  }
};

