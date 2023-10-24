import { Component } from '@angular/core';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent {
  ButtonActions: any[] = [{
    'text': 'add',
    'action': () => {
      alert('add');
    }
  }];
  
  constructor() {
   
  }

 



  

}

