import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value:any, args1:string): any {
    
    if (args1 != null) {
    return value.reduce( (a , b) =>  a + b[args1], 0 );
    } else {
    console.log('error');
    };
  }

}
