import { Component } from '@angular/core';
import { ServiceNameService } from '../service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public service: ServiceNameService){}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.service.isVisible.next(false);
  }
}
