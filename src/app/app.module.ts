import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { PresetComponent } from './preset/preset.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    PresetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
