import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyDetailFromComponent } from './property-details/property-detail-from/property-detail-from.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PropertyDetailsComponent,
    PropertyDetailFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()//pass several options
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
