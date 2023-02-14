import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ProtistologyComponent } from './pages/detail-protistology/protistology/protistology.component';
import {VideoHeaderComponent} from "./components/video-header/video-header.component";
import { HeaderComponent } from './components/header/header.component';
import { WastewaterTreatmentComponent } from './pages/detail-wastewater-treatment/wastewater-treatment/wastewater-treatment.component';
import { SoilBiologyComponent } from './pages/detail-soil-biology/soil-biology/soil-biology.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoHeaderComponent,
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
    TeamComponent,
    ProtistologyComponent,
    HeaderComponent,
    WastewaterTreatmentComponent,
    SoilBiologyComponent,
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
