import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fatura2Component } from './fatura2.component';

describe('Fatura2Component', () => {
  let component: Fatura2Component;
  let fixture: ComponentFixture<Fatura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fatura2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fatura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
