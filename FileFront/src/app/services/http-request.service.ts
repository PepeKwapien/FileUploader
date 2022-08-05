import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UploadedFile } from 'src/interfaces/uploadedFile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private fakeApiUrl = 'http://localhost:5000/files';
  private hasFileBeenAddedSubject: Subject<UploadedFile> =
    new Subject<UploadedFile>();
  private refreshRequestedSubject: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  getFiles(): Observable<UploadedFile[]> {
    return this.httpClient.get<UploadedFile[]>(this.fakeApiUrl);
  }

  createFile(file: UploadedFile): Observable<UploadedFile> {
    const response = this.httpClient.post<UploadedFile>(
      this.fakeApiUrl,
      file,
      httpOptions
    );

    const updateList = response.subscribe((actualFile) =>
      this.hasFileBeenAddedSubject.next(actualFile)
    );

    return response;
  }

  deleteFile(file: UploadedFile) {
    const deleteUrl = `${this.fakeApiUrl}/${file.id}`;
    return this.httpClient.delete<UploadedFile>(deleteUrl);
  }

  fileAddedSubscription() {
    return this.hasFileBeenAddedSubject.asObservable();
  }

  refreshList() {
    this.refreshRequestedSubject.next(true);
  }

  refreshSubscription() {
    return this.refreshRequestedSubject.asObservable();
  }
}
