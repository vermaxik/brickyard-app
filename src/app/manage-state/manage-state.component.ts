import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.css']
})
export class ManageStateComponent implements OnInit {

  states: Array<any>;
  stateForm: FormGroup;

  constructor(private stateService: StateService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.stateForm = this.fb.group({
      state: ['', Validators.required],
    });

    this.stateService.all().subscribe(data => {
      this.states = data;
      console.log(data);
    })
  }

  onSubmit() {
    let state = this.stateForm.value;
    this.stateService.create(state)
      .subscribe(res => {
        console.log(res);
        this.states.push(res);
      }, error => {
        console.log('error')
      });
  }

}
