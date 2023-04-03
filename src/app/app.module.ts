import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertMsgComponent } from './warning-alert-msg/warning-alert-msg.component';
import { SuccessAlertMsgComponent } from './success-alert-msg/success-alert-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertMsgComponent,
    SuccessAlertMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
