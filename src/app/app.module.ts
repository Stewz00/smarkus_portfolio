import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Core Components
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
//Pages Components
import { ImprintComponent } from './pages/imprint/imprint.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';
//Home Page
import { GreetingComponent } from './pages/home/greeting/greeting.component';

import { ProjectsComponent } from './pages/home/projects/projects.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/home/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    GreetingComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
