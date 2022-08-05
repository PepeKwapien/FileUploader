import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileListItemComponent } from './components/file-list-item/file-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadFormComponent,
    FileListComponent,
    FileListItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
