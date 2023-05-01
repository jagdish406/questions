import { Component,OnInit, ViewChild,AfterViewInit ,OnDestroy} from '@angular/core';
import { ServiceNameService } from './service/common.service';
import {FormGroup , FormBuilder, NgForm} from '@angular/forms'
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { firstValueFrom, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.


  title = 'app-my';
data:any =[]
myforms:any;
female:any;
male:any;
tech:any;
age:any;
sel:any
public flag: any;

  @ViewChild('searchForm') searchForm:any;
  showRecords:any=[];
  crouters:boolean = false

  constructor(public service: ServiceNameService, public  fb:FormBuilder){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.



    const formValue = this.searchForm.valueChanges;
    formValue.pipe(

       map((res:any) =>res.seachText),
       filter(()=> this.searchForm.valid),
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

    this.service.isVisible.subscribe((arg:any) => this.crouters = arg);


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


