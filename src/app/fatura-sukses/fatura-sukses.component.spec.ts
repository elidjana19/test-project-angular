import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaSuksesComponent } from './fatura-sukses.component';

describe('FaturaSuksesComponent', () => {
  let component: FaturaSuksesComponent;
  let fixture: ComponentFixture<FaturaSuksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaSuksesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturaSuksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
