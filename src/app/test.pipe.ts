import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let temp:string
    temp= value + ',' +args[0]
    return temp;
  }

}
