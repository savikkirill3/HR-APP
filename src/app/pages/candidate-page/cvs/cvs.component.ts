import {Component} from '@angular/core';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent {
  isShowAddCvs = false;
  cvList = [];

  delete(itm) {
    const index: number = this.cvList.indexOf(itm);
    this.cvList.splice(index, 1);
    itm.close();
  }

  addCvFile(event: {file: File}) {
    this.cvList.push(event.file);
    this.isShowAddCvs = false;
  }
}

