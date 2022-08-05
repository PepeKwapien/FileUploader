import { Component, OnInit } from '@angular/core';
import { UploadedFile } from 'src/interfaces/uploadedFile';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit {
  files: UploadedFile[] = [];

  constructor(private httpRequestService: HttpRequestService) {}

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
