import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { SvgComponent } from './header/svg/svg.component';
import { ContentComponent } from './container/content/content.component';
import { AdvanceComponent } from './footer/advance/advance.component';
import { BottomComponent } from './footer/bottom/bottom.component';
import { ContactComponent } from './footer/contact/contact.component';
import { IconComponent } from './footer/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    SvgComponent,
    ContentComponent,
    AdvanceComponent,
    BottomComponent,
    ContactComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
