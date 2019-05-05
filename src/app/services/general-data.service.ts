import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';
import { Task } from '../sections/shared/task';


@Injectable({ providedIn: 'root',})
export class GeneralDataService {
  constructor(private http: HttpClient) {  }


   public getStandards(): Observable<any> {
       return this.http.get("../assets/test_data/standards.json");
   }


  public getTasks(standardId?:string) {

      if (typeof standardId !== 'undefined') {
        return this.http.get("../assets/test_data/tasks.json")
          .pipe(map( (res:any) => { return res.filter( (entry:Task)  => { return entry.standardId == standardId }) } ));
      } else {
        return this.http.get("../assets/test_data/tasks.json");
      }
  }
  /*
   public getSubnets(): Observable<any> {
       return this.http.get("../assets/test_data/subnets.json");
   }

   public getNodes(): Observable<any> {
       return this.http.get("../assets/test_data/nodes.json");
   }
   */

}
