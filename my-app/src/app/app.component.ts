import { Component,OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
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
  // change_str(){
  //   if(this.local_str=="喜欢你！"){
  //     this.local_str="不喜欢你。"
  //   }
  //   else{
  //     this.local_str="喜欢你！";
  //   }
  // }

  django_message:any;
  django_loading:boolean;
  django_json_date:any;
  django_json_time:any;
  get_date():void{
    this.django_loading=true;
    //this.http.post('http://127.0.0.1:8000/blog/date_time/','date')
    this.http.post('http://47.97.204.165/django/date_time/','date')
    
      .subscribe((res:Response) => {
        this.django_loading=false;
        this.django_message=res["_body"];
        console.log(this.django_message);

        var django_json:any;
        django_json=res.json();
        this.django_json_date=django_json['date'];
        this.django_json_time=django_json['time'];
        console.log("json date : ", this.django_json_date);
        console.log("json time : ", this.django_json_time);
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

        var django_json:any;
        django_json=res.json();
        this.django_json_date=django_json['date'];
        this.django_json_time=django_json['time'];
        console.log("json date : ", this.django_json_date);
        console.log("json time : ", this.django_json_time);
      })
  }
  get_date_time():void{
    this.django_loading=true;
    this.http.post('http://47.97.204.165/django/date_time/','date_time')
      .subscribe((res:Response) => {
        this.django_loading=false;
        this.django_message=res["_body"];
        console.log(this.django_message);

        var django_json:any;
        django_json=res.json();
        this.django_json_date=django_json['date'];
        this.django_json_time=django_json['time'];
        console.log("json date : ", this.django_json_date);
        console.log("json time : ", this.django_json_time);
      })
  }

  input_name:string;
  input_gender:string;
  input_telephone:string;
  input_submit():void{
    console.log("input_name : ", this.input_name);
    console.log("input_gender : ", this.input_gender);
    console.log("input_telephone : ", this.input_telephone);
    var input:any = {
      'NAME':'',
      'GENDER':'',
      'TELEPHONE':''
    };
    input.NAME=this.input_name;
    input.GENDER=this.input_gender;
    input.TELEPHONE=this.input_telephone;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("input to post : ", input);
    // this.http.post('http://127.0.0.1:8000/django/user_info_submit/',input,options)
    this.http.post('http://47.97.204.165/django/user_info_submit/',input,options)
    .subscribe((res:Response) => {
      this.django_message=res["_body"];
      var django_json=res.json();
      alert(django_json['status']);
    })
  }
}
