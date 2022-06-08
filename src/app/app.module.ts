import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BodyComponent } from './body/body.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    ButtonModule,
    ToastModule,
    PanelModule,
    TableModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
