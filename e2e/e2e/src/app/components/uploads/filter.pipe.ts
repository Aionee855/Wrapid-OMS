import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, args?) {
      // ES6 array destructuring
      let minAge = args;
      return value.filter(ninjas => {

        return ninjas.number >= +minAge;

      });
    }




/*
  transform(ninjas: any, term: any): any {
    if( term === undefined) return ninjas;

  return ninjas.filter(function(ninja){

    if(term>=2){
    return ninja.number.toLowerCase().includes(term.toLowerCase());
  }})
}

*/
}
