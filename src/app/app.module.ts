import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ApartmentsEffects } from './state/effects/apartments.effect';
import { HeaderComponent } from './components/header/header.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ApartmentDetailsEffects } from './state/effects/apartment-details.effect';
import { CreateApartmentComponent } from './components/create-apartment/create-apartment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateApartmentEffects } from './state/effects/create-apartment.effect';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    HeaderComponent,
    ApartmentDetailsComponent,
    CreateApartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([
      ApartmentsEffects,
      ApartmentDetailsEffects,
      CreateApartmentEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
