import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WastewaterTreatmentComponent } from './wastewater-treatment.component';

describe('WastewaterTreatmentComponent', () => {
  let component: WastewaterTreatmentComponent;
  let fixture: ComponentFixture<WastewaterTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WastewaterTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WastewaterTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
