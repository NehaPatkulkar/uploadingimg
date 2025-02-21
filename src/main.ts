// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { FileUploadComponent } from './app/file-upload/file-upload.component';

bootstrapApplication(FileUploadComponent)
  .catch(err => console.error(err));
