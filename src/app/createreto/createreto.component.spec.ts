import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateretoComponent } from './createreto.component';

describe('CreateretoComponent', () => {
  let component: CreateretoComponent;
  let fixture: ComponentFixture<CreateretoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateretoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
