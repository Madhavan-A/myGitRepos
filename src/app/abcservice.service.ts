import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcserviceService {

  constructor() { 
   
  }

  total:any
details(){
 return [{name: "Madhavan", age: 25, id: 1},
  {name: "Palani", age: 24, id: 2},
  {name: "Rajiv", age: 22, id: 3}
]
}
  
}
