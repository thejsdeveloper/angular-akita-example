import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterModule } from './filter/filter.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'

@NgModule({
  imports: [AkitaNgDevtools.forRoot(), BrowserModule, FormsModule, FilterModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
