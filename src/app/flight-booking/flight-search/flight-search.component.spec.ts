import { TestBed, async } from '@angular/core/testing';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpModule } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { FlightSearchComponent } from './flight-search.component';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

// Idealerweise in eine Datei auslagern
let flightServiceMock = {
  find(from: string, to: string): Observable<Flight[]> {
    return Observable.of([{
      id: 4711,
      from: 'Graz',
      to: 'Hamburg',
      date: 'morgen'
    }]);
  }
}

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpModule
      ],
      declarations: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          {
            provide: FlightService,
            useValue: flightServiceMock
          }
        ]
      }
    }).compileComponents();
  }));

  it('should not have any found flight initially', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);

    // fixture.nativeElement // DOM des Templates
    // fixture.debugElement // Wrapper für DOM des Templates
    // fixture.detectChanges()

    let comp = fixture.componentInstance;
    expect(comp.flights.length).toBe(0);

  });

  it('should not load flights without from and/or to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = '';
    comp.search();

    expect(comp.flights.length).toBe(0);
    expect(comp.error).toBeTruthy();

  });

  it('should not load flights without from and/or to', () => {
    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;

    comp.from = 'Graz';
    comp.to = 'Hamburg';
    comp.search();

    expect(comp.flights.length).toBe(1);
    expect(comp.error).toBeFalsy();

  });


});
