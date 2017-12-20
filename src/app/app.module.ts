import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from '../pages/profile/profile';
import { ProjectPage } from "../pages/project/project";
import { CategoryPage } from "../pages/category/category";
import { SidemenuPage } from "../pages/sidemenu/sidemenu";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    AboutPage,
    FaqPage,
    LoginPage,
    ProfilePage,
    ProjectPage,
    CategoryPage,
    SidemenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    AboutPage,
    FaqPage,
    LoginPage,
    ProfilePage,
    ProjectPage,
    CategoryPage,
    SidemenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
