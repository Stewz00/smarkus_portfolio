import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { ImprintComponent } from './pages/imprint/imprint/imprint.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection/data-protection.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { GreetingComponent } from './pages/home/greeting/greeting/greeting.component';
import { HomeComponent } from './pages/home/index.home';
import { WorkexperienceComponent } from './pages/home/workexperience/workexperience/workexperience.component';
import { ProjectsComponent } from './pages/home/projects/projects/projects.component';
import { AboutComponent } from './pages/home/about/about/about.component';
import { ContactComponent } from './pages/home/contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    GreetingComponent,
    HomeComponent,
    WorkexperienceComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
