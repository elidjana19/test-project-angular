import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaSukses2Component } from './fatura-sukses2.component';

describe('FaturaSukses2Component', () => {
  let component: FaturaSukses2Component;
  let fixture: ComponentFixture<FaturaSukses2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaSukses2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturaSukses2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
