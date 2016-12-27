/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaBatteryComponent } from './tesla-battery.component';
import { TeslaBatteryService } from '../../tesla-battery.service';
import { TeslaCarComponent } from '../../components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from '../../components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from '../../components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from '../../components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from '../../components/tesla-wheels/tesla-wheels.component';

describe('TeslaBatteryComponent', () => {
  let component: TeslaBatteryComponent;
  let fixture: ComponentFixture<TeslaBatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeslaBatteryComponent,
        TeslaCarComponent,
        TeslaStatsComponent,
        TeslaCounterComponent,
        TeslaClimateComponent,
        TeslaWheelsComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      providers: [
        TeslaBatteryService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
