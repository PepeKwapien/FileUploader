import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
})
export class UploadFormComponent implements OnInit {
  private uploadedFile: File | null = null;
  filename: string;
  private defaultFilename = 'No chosen file';

  constructor() {
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
  }
}
