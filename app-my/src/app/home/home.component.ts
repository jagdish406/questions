import { Component , OnInit} from '@angular/core';
import { ServiceNameService } from '../service/common.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  constructor(public service: ServiceNameService){}

  ngOnInit(){
    this.service.isVisible.next(true);
  }

}
