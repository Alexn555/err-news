import { NgModule, provideBrowserGlobalErrorListeners, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AppHeader } from './header/header';
import { NewsService } from '../services/newsService';
import { AppNews } from './news/news';
import { NewsCategory } from './category/category';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeader,
    AppNews,
    NewsCategory
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    NewsService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [App]
})
export class AppModule { }
