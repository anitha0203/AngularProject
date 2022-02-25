import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arra1:any[] = [];
  zipCode! : number;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  user: any;
  ngOnInit(): void { 
    this.setData()
  }
  constructor(private service: UserService) {}

    async setData() {    
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
        }
        this.user=exm
        this.arra1=[]
        for(var i=0;i<this.user.length;i++)
        {
          await this.delay(i);
        }
    }
    setZip(zipcode:any) {
      this.zcode = zipcode;
      let exm = [];
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
        exm = [zipcode, ...exm];
      }else {
        exm = [zipcode];
      }
      localStorage.setItem('user',JSON.stringify(exm));
      this.setData()
    }
    idna(id:any)
    {
      return '/forecast/'+id
    }
    idan(id:any)
    {
      this.service.gData(id)
    }



    
    delay = (i:any)=> new Promise(resolve =>{
      let arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
      resolve(
        this.service.getData(this.url + this.user[i]+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;        
          arr1.id = this.user[i]; 
          arr1.ccond = this.data.weather[0].main;
          arr1.temp = this.data.main.temp;
          arr1.temp_max = this.data.main.temp_max;
          arr1.temp_min = this.data.main.temp_min;
          this.arra1.push(arr1)
        })
      )
    })






    imgna(ccond:string)
    {
      return "https://www.angulartraining.com/images/weather/"+ccond.toLowerCase()+".png"
    }
    sub(id:any){
      let exm = []; let us = [];var k=0;
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
      }
      for(var l=0;l<exm.length;l++)
      {
        if(id!=exm[l])
          us[k++] = exm[l];
      }
      localStorage.setItem('user',JSON.stringify(us));
      this.setData();
  }
}






/*

{

  arra1:any[] = [];
  zipCode! : number;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  user: any;
  ngOnInit(): void { 
    this.setData()
  }
  constructor(private service: UserService) {}

    async setData() {    
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
        }
        this.user=exm
        this.arra1=[]
        for(var i=0;i<this.user.length;i++)
        {
          await this.delay(i);
        }
    }
    setZip(zipcode:any) {
      this.zcode = zipcode;
      let exm = [];
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
        exm = [zipcode, ...exm];
      }else {
        exm = [zipcode];
      }
      localStorage.setItem('user',JSON.stringify(exm));
      this.setData()
    }
    idna(id:any)
    {
      return '/forecast/'+id
    }
    idan(id:any)
    {
      this.service.gData(id)
    }
    delay = (i:any)=> new Promise(resolve =>{
      let arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
      resolve(
        this.service.getData(this.url + this.user[i]+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;        
          arr1.id = this.user[i]; 
          arr1.ccond = this.data.weather[0].main;
          arr1.temp = this.data.main.temp;
          arr1.temp_max = this.data.main.temp_max;
          arr1.temp_min = this.data.main.temp_min;
          this.arra1.push(arr1)
        })
      )
    })
    imgna(ccond:string)
    {
      return "https://www.angulartraining.com/images/weather/"+ccond.toLowerCase()+".png"
    }
    sub(id:any){
      let exm = []; let us = [];var k=0;
      if(localStorage.getItem('user')) {
        exm = JSON.parse(localStorage.getItem('user') || '{}');
      }
      for(var l=0;l<exm.length;l++)
      {
        if(id!=exm[l])
          us[k++] = exm[l];
      }
      localStorage.setItem('user',JSON.stringify(us));
      this.setData();
  }
}
*/















/*
{
  

   arra1:any[] = [];
  arr : Ccondition=[{id:1,ccond:'',temp:2.5,temp_max:3.4,temp_min:5.5}]
 arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
 arrs=[]
  zipCode!:string
  key: string = 'Name';
  myItem!: string;id1!: string;img1!:string;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  //ccond!: string;      temp!: number;      temp_max!: number;      temp_min!: number;
  user: any;
  ngOnInit(): void { 
  }
  sun=false; snow=false; rain=false; clouds=false;
  constructor(private service: UserService) {}

    async setZip(zipcode:any) {
        this.zcode = zipcode;
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
          exm = [zipcode, ...exm];
        }else {
          exm = [zipcode];
        }
        localStorage.setItem('user',JSON.stringify(exm));
        this.user=exm
        
        for(var i=0;i<this.user.length;i++)
        {
          console.log(this.user[0] + '  5  ' + this.user[i] + '   i = ' + i)
          await this.delay(i);
        }
    }
    sub(){
      localStorage.removeItem('user');
    }
    delay = (i:any)=> new Promise(resolve =>{
     // let arra:any[] = [];
      resolve(
      this.service.getData(this.url + this.user[i]+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
        this.data = res;        
        console.log(this.user[0] + '  ' + this.user[i] + '   i = ' + i)
        this.arr1.id = this.user[0]; 
        this.arr1.ccond = this.data.weather[0].main;
        console.log(this.arr1.id)  
        this.arr1.temp = this.data.main.temp;
        this.arr1.temp_max = this.data.main.temp_max;
        this.arr1.temp_min = this.data.main.temp_min;
        this.id1 = '/forecast/'+this.zcode
        this.img1 = "https://www.angulartraining.com/images/weather/"+this.arr1.ccond.toLowerCase()+".png" 
       // arra.push(this.arr1)
        this.arra1.push(this.arr1)
       // this.arr.push(this.arra)
        console.log(this.arr1) 
      })
      )
    })
}
*/



















/*
{

  arr : Ccondition=[{id:1,ccond:'',temp:2.5,temp_max:3.4,temp_min:5.5}]
 arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
 arrs=[]
  zipCode!:string
  key: string = 'Name';
  myItem!: string;id1!: string;img1!:string;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  //ccond!: string;      temp!: number;      temp_max!: number;      temp_min!: number;
  user: any;
  ngOnInit(): void { 
  }
  sun=false; snow=false; rain=false; clouds=false;
  constructor(private service: UserService) {}

    async setZip(zipcode:any) {
        this.zcode = zipcode;
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
          exm = [zipcode, ...exm];
        }else {
          exm = [zipcode];
        }
        localStorage.setItem('user',JSON.stringify(exm));
        this.user=exm
        
        for(var i=0;i<this.user.length;i++)
        {
          console.log(this.user[0] + '  5  ' + this.user[i] + '   i = ' + i)
          await this.delay(i);
        }
    }
    sub(){
      localStorage.removeItem('user');
    }
     delay = (i:any)=> new Promise(resolve =>{

      let arra:any[] = [];
      this.service.getData(this.url + this.user[i]+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
        this.data = res;        

        console.log(this.user[0] + '  ' + this.user[i] + '   i = ' + i)
        this.arr1.id = this.user[0]; 
        this.arr1.ccond = this.data.weather[0].main;
        console.log(this.arr1.id)  
        this.arr1.temp = this.data.main.temp;
        this.arr1.temp_max = this.data.main.temp_max;
        this.arr1.temp_min = this.data.main.temp_min;
        this.id1 = '/forecast/'+this.zcode
        this.img1 = "https://www.angulartraining.com/images/weather/"+this.arr1.ccond.toLowerCase()+".png" 
        arra.push(this.arr1)
        this.arr = arra
        console.log(this.arr) 
      });
    
  }
  )

}
*/


















/*
{

  arr : Ccondition=[{id:1,ccond:'',temp:2.5,temp_max:3.4,temp_min:5.5}]
 arr1 = {id:'',ccond:'',temp:'',temp_max:'',temp_min:''}
 arrs=[]
  zipCode!:string
  key: string = 'Name';
  myItem!: string;id1!: string;img1!:string;
  zcode!: number;data:any;
  url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  //ccond!: string;      temp!: number;      temp_max!: number;      temp_min!: number;
  user: any;
  ngOnInit(): void { 
  }
  sun=false; snow=false; rain=false; clouds=false;
  constructor(private service: UserService) {}

    setZip(zipcode:any) {
        this.zcode = zipcode;
        let exm = [];
        if(localStorage.getItem('user')) {
          exm = JSON.parse(localStorage.getItem('user') || '{}');
          exm = [zipcode, ...exm];
        }else {
          exm = [zipcode];
        }
        localStorage.setItem('user',JSON.stringify(exm));
        this.user=exm
        //  this.getData()
        let arra:any[] = [];
        for(var i=0;i<this.user.length;i++)
        {
          console.log(this.user[0] + '  5  ' + this.user[i] + '   i = ' + i)
          this.service.getData(this.url + this.zcode+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
          this.data = res;        
         // this.arr[i].id = 34;
       //  for(i=0;i<this.arr.length;i++)
       //  this.arr[i].id=2
        //  console.log(this.arr[i].id) 
        console.log(this.user[0] + '  ' + this.user[i] + '   i = ' + i)
          this.arr1.id = this.user[0]; 
          this.arr1.ccond = this.data.weather[0].main;
          console.log(this.arr1.id)  
          this.arr1.temp = this.data.main.temp;
          this.arr1.temp_max = this.data.main.temp_max;
          this.arr1.temp_min = this.data.main.temp_min;
        //  console.log(this.arr1.ccond + '   ' + this.arr1.temp  + '   ' +this.arr1.temp_min + '   ' +this.arr1.temp_max );
          this.id1 = '/forecast/'+this.zcode
          this.img1 = "https://www.angulartraining.com/images/weather/"+this.arr1.ccond.toLowerCase()+".png" 
          arra.push(this.arr1)
          this.arr = arra
          console.log(this.arr)

          // this.arr[i].id = this.data.weather[0].main;
          // console.log(this.arr[i].id)  
          // this.arr[i].temp = this.data.main.temp;
          // this.arr[i].temp_max = this.data.main.temp_max;
          // this.arr[i].temp_min = this.data.main.temp_min;
          // console.log(this.arr[i].ccond + '   ' + this.arr[i].temp  + '   ' +this.arr[i].temp_min + '   ' +this.arr[i].temp_max );
          // this.id1 = '/forecast/'+this.zcode
          // this.img1 = "https://www.angulartraining.com/images/weather/"+this.arr[i].ccond.toLowerCase()+".png" 
          });
        }
    }
    sub(){
      localStorage.removeItem('user');
    }
    // getData(i:any) {
    //     this.zcode = i
    //     this.service.getData(this.url + this.zcode+'&appid=5a4b2d457ecbef9eb2a71e480b947604').subscribe((res) => {
    //       this.data = res;          
    //       this.ccond = this.data.weather[0].main;
    //       this.temp = this.data.main.temp;
    //       this.temp_max = this.data.main.temp_max;
    //       this.temp_min = this.data.main.temp_min;
    //       console.log(this.ccond + '   ' + this.temp  + '   ' +this.temp_min + '   ' +this.temp_max );
    //       this.id = '/forecast/'+this.zcode
    //       this.img1 = "https://www.angulartraining.com/images/weather/"+this.ccond.toLowerCase()+".png"
    // });    
  //}
}

*/
