import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { HeaderComponent } from './admin/header/header.component';
import { ContentComponent } from './admin/content/content.component';
import { FooterComponent } from './admin/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavigationComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
