import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HomeComponent, MapComponent, ChatComponent} from './components';
import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ContactProfileComponent} from './components/chat/contact-profile/contact-profile.component';
import {MessagesComponent} from './components/chat/messages/messages.component';
import {MessageInputComponent} from './components/chat/message-input/message-input.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ChatComponent,
    ContactProfileComponent,
    MessagesComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.googleMapApiKey}`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
