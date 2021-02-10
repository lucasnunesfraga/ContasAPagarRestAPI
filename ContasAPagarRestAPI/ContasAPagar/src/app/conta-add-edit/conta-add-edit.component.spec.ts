import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAddEditComponent } from './conta-add-edit.component';

describe('ContaAddEditComponent', () => {
  let component: ContaAddEditComponent;
  let fixture: ComponentFixture<ContaAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
