import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableComponentComponent } from './disable-component.component';

describe('DisableComponentComponent', () => {
  let component: DisableComponentComponent;
  let fixture: ComponentFixture<DisableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
