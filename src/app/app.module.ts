import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterModule } from './filter/filter.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'


const routes: Routes = [ {
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => import('./app/filter/filer.module').then(module => module.FilterModule)
}]

@NgModule({
  imports: [
    AkitaNgDevtools.forRoot(), 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
