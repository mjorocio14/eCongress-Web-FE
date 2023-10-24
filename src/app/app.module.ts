import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ReceivingComponent } from './receiving/receiving.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { ReceivingTableComponent } from './receiving/receiving-table/receiving-table.component';
import { ReceivingDialogComponent } from './receiving/receiving-dialog/receiving-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ReceivingService } from './receiving/receiving.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ReceivingComponent,
    DashboardComponent,
    ErrorPageComponent,
    ReceivingTableComponent,
    ReceivingDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [ReceivingService,  { provide: MAT_DIALOG_DATA, useValue: {} },],
  bootstrap: [AppComponent]
})
export class AppModule { }
