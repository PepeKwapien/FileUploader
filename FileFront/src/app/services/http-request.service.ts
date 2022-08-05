import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadedFile } from 'src/interfaces/uploadedFile';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private fakeApiUrl = 'http://localhost:5000/files';

  constructor(private httpClient: HttpClient) {}

  getFiles(): Observable<UploadedFile[]> {
    return this.httpClient.get<UploadedFile[]>(this.fakeApiUrl);
  }

  deleteFile(file: UploadedFile) {
    const deleteUrl = `${this.fakeApiUrl}/${file.id}`;
    return this.httpClient.delete<UploadedFile>(deleteUrl);
  }
}
