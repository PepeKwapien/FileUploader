import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
})
export class UploadFormComponent implements OnInit {
  filename: string;
  private defaultFilename = 'No chosen file';

  constructor() {
    this.filename = this.defaultFilename;
  }

  ngOnInit(): void {}

  onSelect() {
    this.filename = 'test.txt';
  }

  onSend() {
    if (this.defaultFilename === this.filename) {
      alert('Choose a file');
      return;
    }
  }
}
