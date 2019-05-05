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
      console.log("inside getTasks");

      if (typeof standardId !== 'undefined') {
        console.log("standardId not undefined");


        return this.http.get("../assets/test_data/tasks.json")
          .pipe(map( (res:any) => { return res.filter( (entry:Task)  => { return entry.standardId == standardId }) } ));
      } else {
        console.log("standardId not defined");
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
