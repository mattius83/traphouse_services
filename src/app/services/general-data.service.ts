import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({ providedIn: 'root',})
export class GeneralDataService {
  constructor(private http: HttpClient) {

   }


   public getStandards(): Observable<any> {
       return this.http.get("../assets/test_data/standards.json");
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
