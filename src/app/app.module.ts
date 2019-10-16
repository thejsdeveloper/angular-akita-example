import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { FilterModule } from "./filter/filter.module";

@NgModule({
  imports: [BrowserModule, FormsModule, FilterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
