import { Component, OnInit } from '@angular/core';
import { UploadedFile } from 'src/interfaces/uploadedFile';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit {
  files: UploadedFile[] = [];
  private fileAddedSubscription: Subscription;
  private refreshRequested: Subscription;

  constructor(private httpRequestService: HttpRequestService) {
    this.fileAddedSubscription = this.httpRequestService
      .fileAddedSubscription()
      .subscribe((file: UploadedFile) => this.files.push(file));
    this.refreshRequested = this.httpRequestService
      .refreshSubscription()
      .subscribe((a) => this.getFiles());
  }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.httpRequestService
      .getFiles()
      .subscribe((fetchedFiles) => (this.files = fetchedFiles));
  }

  deleteFile(file: UploadedFile) {
    this.httpRequestService
      .deleteFile(file)
      .subscribe(
        (fileRemoved) =>
          (this.files = this.files.filter((f) => f.id !== file.id))
      );
  }
}
