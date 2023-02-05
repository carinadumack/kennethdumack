import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeasersComponent } from './components/teasers/teasers.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { CvComponent } from './components/cv/cv.component';
import { InterestsComponent } from './components/interests/interests.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import {NgxTwitterWidgetsModule} from "ngx-twitter-widgets";
import { HomeComponent } from './pages/home/home.component';
import { WorkgroupComponent } from './pages/workgroup/workgroup.component';
import { NewsComponent } from './components/news/news.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainnavComponent,
    FooterComponent,
    TeasersComponent,
    PublicationsComponent,
    CvComponent,
    InterestsComponent,
    TwitterFeedComponent,
    HomeComponent,
    WorkgroupComponent,
    NewsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTwitterWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
