import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any[] {
    if (!value || !propName) {
      return value;
    }
    value.sort((a: any, b: any) => {
      const nameA = a[propName].toLowerCase();
      const nameB = b[propName].toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    }
    );
    return value;
  }

}
