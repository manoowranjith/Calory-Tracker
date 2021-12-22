import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredString:string){
    if(filteredString === '')
    {
      return value;
    }
    const foods=[]
    for(let food of value)
    {
      if(food.name == filteredString)
      {
        foods.push(food)
      }
    }
    return foods;
  }
}
