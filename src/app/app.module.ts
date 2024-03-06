import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { LinkCellRendererComponent } from './components/link-cell-renderer/link-cell-renderer.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, TableComponent, LinkCellRendererComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
