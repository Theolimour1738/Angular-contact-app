import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(!value) return null;
    if(!args) return value;
   
    args = args.toLowerCase();

    return value.filter((contact: any) =>{
      return JSON.stringify(contact).toLocaleLowerCase().includes(args);
    })
  }


}
