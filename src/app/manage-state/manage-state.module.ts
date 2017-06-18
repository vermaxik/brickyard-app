import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';

import { ManageStateComponent } from './manage-state.component';
import { StateItemComponent } from './state-item/state-item.component'

import { StateService } from '../services/state.service';

@NgModule({
  declarations: [
    ManageStateComponent,
    StateItemComponent
  ],
  imports: [ CommonModule,
             FormsModule,
             ReactiveFormsModule,
             DndModule.forRoot() ],
  providers: [StateService ],
  exports: [ ManageStateComponent ]
})
export class ManageStateModule { }
