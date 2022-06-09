import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BodyComponent } from './body/body.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    OverlayPanelModule,
    ButtonModule,
    ToastModule,
    PanelModule,
    TableModule,
    DialogModule,
    ListboxModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
