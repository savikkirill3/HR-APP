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
  CVFileEmitter: EventEmitter<{file: any}> = new EventEmitter();

  @Output('close')
  closeEmitter: EventEmitter<null> = new EventEmitter();

  ngOnInit() {
  }

  addCV(event) {
    console.log('event ->', event);

    if (event.target.files) {
      this.readFile(event.target.files[0]).then((file => {
        this.CVFileEmitter.emit({file: file});
      }));
    }
  }

  close() {
    this.closeEmitter.emit();
  }

  private readFile(file: File): Promise<string> {
      return new Promise((resolve: Function, reject: Function) => {
        const reader = new FileReader();
        // reads file as URL! Just insert it in link
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve({
            name: file.name,
            size: file.size,
            data: reader.result,
            mime: reader.result.split('base64')[0].substr(reader.result.split('base64')[0].indexOf(':') + 1).slice(0, -1)
          });
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
  }
}
