import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
