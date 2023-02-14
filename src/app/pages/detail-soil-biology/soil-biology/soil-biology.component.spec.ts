import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilBiologyComponent } from './soil-biology.component';

describe('SoilBiologyComponent', () => {
  let component: SoilBiologyComponent;
  let fixture: ComponentFixture<SoilBiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilBiologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilBiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
