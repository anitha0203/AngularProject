import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  code!:number;
  constructor(private http : HttpClient) { }
  
  getData(url : string){
    return this.http.get(url);
  }
  gData(c:number){
      this.code = c;
      console.log(this.code +'   gdata ')
  }
  sData(){
    console.log(this.code +'   sdata ')
    return this.code
  }
}
