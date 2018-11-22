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

  addCvFile(event: { file: File }) {
    console.log('event ->', event);
    this.cvList.push(event.file);
    this.isShowAddCvs = false;
  }

  downloadFile(cv: any) {
    const a = document.createElement('a');
    a.download = cv.name;
    a.href = cv.data;
    a.style.display = 'none';
    // a.target = '_blank';
    document.body.appendChild(a);
    a.click();
  }


}

