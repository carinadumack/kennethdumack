import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtistologyComponent } from './protistology.component';

describe('ProtistologyComponent', () => {
  let component: ProtistologyComponent;
  let fixture: ComponentFixture<ProtistologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtistologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtistologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
