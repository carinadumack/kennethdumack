import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkgroupComponent } from './workgroup.component';

describe('WorkgroupComponent', () => {
  let component: WorkgroupComponent;
  let fixture: ComponentFixture<WorkgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
