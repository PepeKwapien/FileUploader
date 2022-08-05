import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFormUiService } from 'src/app/services/upload-form-ui.service';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;
  showUploadForm: boolean;
  uploadFormSubscription: Subscription = new Subscription();

  constructor(
    private uploadFormUiService: UploadFormUiService,
    private httpRequestService: HttpRequestService
  ) {
    this.showUploadForm = false;
    this.title = 'FileFront';
  }

  ngOnInit(): void {
    this.uploadFormSubscription = this.uploadFormUiService
      .toggleSubscription()
      .subscribe((value) => (this.showUploadForm = value));
  }

  onUploadFormToggle() {
    this.uploadFormUiService.toggleUploadForm();
  }

  onRefresh() {
    this.httpRequestService.refreshList();
  }
}
