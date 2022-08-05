import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFormUiService {
  private showUploadForm: boolean = false;
  private subject: Subject<any> = new Subject<any>();

  constructor() {}

  toggleUploadForm(): void {
    this.showUploadForm = !this.showUploadForm;
    this.subject.next(this.showUploadForm);
  }

  toggleSubscription(): Observable<any> {
    return this.subject.asObservable();
  }
}
