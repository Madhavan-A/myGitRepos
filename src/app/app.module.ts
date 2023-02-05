import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AbcserviceService } from './abcservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { PpipePipe } from './ppipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    PpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AbcserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
