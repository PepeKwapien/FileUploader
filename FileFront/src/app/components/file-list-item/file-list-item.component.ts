import { Component, Input, OnInit } from '@angular/core';
import { UploadedFile } from 'src/interfaces/uploadedFile';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-list-item',
  templateUrl: './file-list-item.component.html',
  styleUrls: ['./file-list-item.component.css'],
})
export class FileListItemComponent implements OnInit {
  @Input() file: UploadedFile = { id: '', filename: '' };

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
