import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  states: Array<any>;
  userState: any;
  errors:any;

  constructor(private stateService: StateService,
              private auth: AuthService) {}

  ngOnInit() {
    this.stateService.all().subscribe(data => {
      this.states = data;
    })

    this.auth.token().subscribe(data => this.userState = data['main']);
  }

  changeState(value:number) {
    this.auth.changeState(value).subscribe(data => {
        this.userState = data['main']
        this.errors = '';
      },
      error => this.errors = error
    );
  }

  resetState() {
    this.auth.changeState(this.states[0]['id'], true).subscribe(data => {
        this.userState = data['main']
        this.errors = '';
      },
      error => this.errors = error
    );
  }

}
