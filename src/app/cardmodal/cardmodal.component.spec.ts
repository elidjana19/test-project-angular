import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmodalComponent } from './cardmodal.component';

describe('CardmodalComponent', () => {
  let component: CardmodalComponent;
  let fixture: ComponentFixture<CardmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
