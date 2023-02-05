import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ppipe'
})
export class PpipePipe implements PipeTransform {

  transform(value: any): any {
    return value.split("").reverse().join("");
  }
// 1. Adding Mr. and Mrs.
  //   if (Gender == "M"){
  //   return "Mr. " + value;
  // }
  //   else{
  //   return "Mrs." + value;
  // }
}
