import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
