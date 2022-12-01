import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/models/apartment.model';
import { IronbnbAPIService } from 'src/app/services/ironbnb-api.service';
import {
  loadApartments,
  loadingApartments,
} from 'src/app/state/actions/apartments.action';
import { AppState } from 'src/app/state/app.state';
import {
  selectApartments,
  selectLoading,
} from 'src/app/state/selectors/apartments.selector';
import { selectDarkMode } from 'src/app/state/selectors/header.selector';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css'],
})
export class ApartmentListComponent implements OnInit {
  loading$: Observable<boolean>;
  apartments$: Observable<Apartment[]>;
  darkMode$: Observable<boolean>;

  constructor(
    private store: Store<AppState> // private ironbnbAPIService: IronbnbAPIService
  ) {
    this.loading$ = new Observable<boolean>();
    this.apartments$ = new Observable<Apartment[]>();
    this.darkMode$ = new Observable<boolean>();
  }

  ngOnInit(): void {
    // Check the loading state
    this.loading$ = this.store.select(selectLoading);
    // Check the apartments state
    this.apartments$ = this.store.select(selectApartments);

    this.darkMode$ = this.store.select(selectDarkMode);

    // Trigger loadingApartment actions. Loading should be passing from false => true
    this.store.dispatch(loadingApartments());

    // this.ironbnbAPIService.getApartments().subscribe((apartments) => {
    //   this.store.dispatch(loadApartments({ apartments }));
    // });
  }
}
