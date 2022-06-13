import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
