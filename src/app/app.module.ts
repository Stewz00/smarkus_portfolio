import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { ImprintComponent } from './pages/imprint/imprint/imprint.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    NavMenuComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
