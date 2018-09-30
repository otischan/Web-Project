import { Component,OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { FormControl, FormGroup } from '@angular/forms'; 
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  local_str:string;

  constructor(private  http: Http) { // <--- inject FormBuilder
  }
  ngOnInit(){
    this.local_str="喜欢你！";
  }
  change_str(){
    if(this.local_str=="喜欢你！"){
      this.local_str="不喜欢你。"
    }
    else{
      this.local_str="喜欢你！";
    }
  }

  django_message:any;
  django_loading:boolean;
  get_date():void{
    this.django_loading=true;
    //this.http.post('http://127.0.0.1:8000/blog/date_time/','date')
    this.http.post('http://47.97.204.165/django/date_time/','date')
    
      .subscribe((res:Response) => {
        this.django_loading=false;
        this.django_message=res["_body"];
        console.log(this.django_message);
      })
  }
  get_time():void{
    this.django_loading=true;
    // this.http.post('http://127.0.0.1:8000/blog/date_time/','time')
    this.http.post('http://47.97.204.165/django/date_time/','time')
      .subscribe((res:Response) => {
        this.django_loading=false;
        this.django_message=res["_body"];
        console.log(this.django_message);
      })
  }
  get_date_time():void{
    this.django_loading=true;
    this.http.post('http://47.97.204.165/django/date_time/','date_time')
      .subscribe((res:Response) => {
        this.django_loading=false;
        this.django_message=res["_body"];
        console.log(this.django_message);
      })
  }
  
}
