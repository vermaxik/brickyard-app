import { Component, Input } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'state-item',
  templateUrl: './state-item.component.html',
  styleUrls: ['./state-item.component.css']
})
export class StateItemComponent {
  @Input('item') state;
  @Input('index') index;

  editMode:boolean =  false;
  deleted:boolean =  false;

  constructor(private stateService: StateService) { }

  editState(state) {
    this.editMode = true;
  }

  saveState(state) {
    this.editMode = false;
    this.stateService.update(state).subscribe(result =>
        result,
        error => 'Error')
  }

  removeState(state) {
    this.stateService.delete(state).subscribe(result => {
      this.deleted = true;
    });
  }

  cancelEditState(state) {
    this.editMode = false;
  }

  changePosition($event: any, index: number) {
    let state = $event;
    state.position = index + 1;
    console.log(state);
    this.stateService.changePosition(state).subscribe(result => {
      console.log('position changed');
    });
  }
}
