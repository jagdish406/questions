import { Component,OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ServiceNameService } from './service/common.service';
import {FormGroup , FormBuilder, NgForm} from '@angular/forms'
import { concatMap, debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'app-my';
data:any =[]
myforms:any;
female:any;
male:any;
tech:any;
age:any;
sel:any


  @ViewChild('searchForm') searchForm:any;
  showRecords:any=[];
  constructor(public service: ServiceNameService, public  fb:FormBuilder){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

   
    
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
       map((res:any) =>res.seachText),
       debounceTime(500),
       distinctUntilChanged(),
       switchMap(rs => this.service.getServicesList(rs))
      ).subscribe((res:any )=>{
        this.showRecords= res.products;
        console.log(this.showRecords);
        
      });   
    
  }
  ngOnInit(){

    this.myforms = this. fb.group({})
    this.data = this.service.mocksD;
    if(this.showRecords.length > 0){
      let arr= this.showRecords;
      console.log(arr);
    }
    
   
  }


  onSave(event:any) {
    let sendData = {
      male:this.male,
      female:this.female,
      tech:this.tech,
      age:this.age,
      sel:this.sel
    }
    console.log(sendData);
  }
}


