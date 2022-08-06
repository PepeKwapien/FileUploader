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
  //private apiUrl = 'http://localhost:5000/files'; // This is URL for local fake backend from package json-server. To test it uncomment this url and run 'npm run server'
  private apiUrl = 'https://localhost:42000/files';
  private hasFileBeenAddedSubject: Subject<boolean> = new Subject<boolean>();
  private refreshRequestedSubject: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  getFiles(): Observable<UploadedFile[]> {
    return this.httpClient.get<UploadedFile[]>(this.apiUrl);
  }

  createFile(file: UploadedFile): Observable<UploadedFile> {
    const response = this.httpClient.post<UploadedFile>(
      this.apiUrl,
      file,
      httpOptions
    );

    this.hasFileBeenAddedSubject.next(true);

    return response;
  }

  deleteFile(file: UploadedFile) {
    const deleteUrl = `${this.apiUrl}/${file.id}`;
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
