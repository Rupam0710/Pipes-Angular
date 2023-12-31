import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string, propName: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const result = [];
    for (const item of value) {
      if (item[propName] === filteredString) {
        result.push(item)
      }
    }
    return result;
  }

}
