import { Component, OnInit } from '@angular/core';
import { UploadedFile } from 'src/interfaces/uploadedFile';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit {
  files: UploadedFile[] = [];

  constructor() {}

  ngOnInit(): void {}
}
