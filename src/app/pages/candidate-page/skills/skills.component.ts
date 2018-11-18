import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {EditCandidateDialogComponent} from '../short-info/edit-candidate-dialog/edit-candidate-dialog.component';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  isAllPanelsOpened = false;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skill[] = [
    {name: 'Java'},
    {name: 'JS'},
    {name: 'PHP'},
  ];

  constructor() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  onPanelOpened() {
    this.isAllPanelsOpened = true;
  }

  onPanelClosed() {
    this.isAllPanelsOpened = false;
  }

}
