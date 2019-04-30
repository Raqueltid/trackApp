import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { UnsupportNavigatorComponent } from './components/unsupport-navigator/unsupport-navigator.component';
import { HomeComponent } from './contracts/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnsupportNavigatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
