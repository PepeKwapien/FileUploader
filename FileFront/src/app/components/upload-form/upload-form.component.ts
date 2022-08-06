import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { UploadedFile } from 'src/interfaces/uploadedFile';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
})
export class UploadFormComponent implements OnInit {
  private uploadedFile: File | null = null;
  filename: string;
  private defaultFilename = 'No chosen file';

  faFileArrowUp = faFileArrowUp;
  faPaperPlane = faPaperPlane;

  constructor(
    private httpRequestService: HttpRequestService,
    private toastr: ToastrService
  ) {
    this.filename = this.defaultFilename;
  }

  ngOnInit(): void {}

  onChange(eventTarget: EventTarget | null) {
    const target: HTMLInputElement | null = eventTarget as HTMLInputElement;
    this.uploadedFile = target?.files?.item(0) ?? null;
    this.filename = this.uploadedFile?.name ?? this.defaultFilename;
  }

  onSend() {
    if (this.defaultFilename === this.filename) {
      alert('Choose a file');
      return;
    }

    const newFile: UploadedFile = { filename: this.filename };

    this.httpRequestService.createFile(newFile).subscribe({
      next: (createdFile) => {
        this.httpRequestService.publishAddedFile(createdFile);
        this.toastr.success(`Created file ${createdFile.filename}`);
      },
      error: () => {
        this.toastr.error('There was an error. Try again');
      },
    });

    this.filename = this.defaultFilename;
  }
}
