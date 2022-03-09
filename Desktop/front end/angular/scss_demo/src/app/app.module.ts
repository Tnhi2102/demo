import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { PopupComponent } from './popup/popup.component';
import { LeftComponent } from './container/left/left.component';
import { RightComponent } from './container/right/right.component';
import { CollapseComponent } from './container/right/collapse/collapse.component';
import { InsertComponent } from './container/right/insert/insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    PopupComponent,
    LeftComponent,
    RightComponent,
    CollapseComponent,
    InsertComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
