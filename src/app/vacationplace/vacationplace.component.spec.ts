import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationplaceComponent } from './vacationplace.component';

describe('VacationplaceComponent', () => {
  let component: VacationplaceComponent;
  let fixture: ComponentFixture<VacationplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
