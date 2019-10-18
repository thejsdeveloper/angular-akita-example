import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterModule } from './filter/filter.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { ServicesComponent } from './services/services.component'


const routes: Routes = [ {
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => import('./filter/filter.module').then(module => module.FilterModule)
}, {
  path: 'services', 
  component: ServicesComponent
}]

@NgModule({
  imports: [
    AkitaNgDevtools.forRoot(), 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    ],
  declarations: [AppComponent, ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
