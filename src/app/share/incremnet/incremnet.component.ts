import { Component, OnInit } from '@angular/core';
import { IncrementerService } from '../service/incrementer.service';

@Component({
  selector: 'app-incremnet',
  templateUrl: './incremnet.component.html',
  styleUrls: ['./incremnet.component.scss'],
})
export class IncremnetComponent  implements OnInit {



  constructor(
    public incrementer: IncrementerService
  ) { }

  ngOnInit() {}

  decrementar(){
    if(this.incrementer.valor > 0)
    this.incrementer.valor--;
  }

  incrementar(){
    
    this.incrementer.valor++;

  }
}
