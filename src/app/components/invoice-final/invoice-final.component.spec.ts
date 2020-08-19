import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFinalComponent } from './invoice-final.component';

describe('InvoiceFinalComponent', () => {
  let component: InvoiceFinalComponent;
  let fixture: ComponentFixture<InvoiceFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
