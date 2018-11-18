import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';
import {OutputEmitter} from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'cvs-add',
  templateUrl: './cvs-add.component.html',
  styleUrls: ['./cvs-add.component.css']
})
export class CvsAddComponent implements OnInit {

  @Output()
  CVFileEmitter: EventEmitter<{file: File}> = new EventEmitter();

  ngOnInit() {
  }
  addCV(event) {
    console.log('event ->', event);

    if (event.target.files) {
      this.CVFileEmitter.emit({file: event.target.files[0]});
    }
  }
}
