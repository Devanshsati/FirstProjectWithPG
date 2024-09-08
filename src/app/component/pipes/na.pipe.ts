import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    // if(value==null || value==undefined || value==''){
    //   return 'Null';
    // }else{
    //   return value;
    // }
    const [x,y] = args;
    return value*x*y;
  }

}
