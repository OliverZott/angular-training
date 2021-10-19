import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbPersonListComponent } from './mtb-person-list.component';

describe('MtbPersonListComponent', () => {
  let component: MtbPersonListComponent;
  let fixture: ComponentFixture<MtbPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtbPersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
