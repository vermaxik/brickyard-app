import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  states: Array<any>;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.all().subscribe(data => {
      this.states = data;
    })
  }

}
