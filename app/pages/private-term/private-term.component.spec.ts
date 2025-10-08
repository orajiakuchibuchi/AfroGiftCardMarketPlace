import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTermComponent } from './private-term.component';

describe('PrivateTermComponent', () => {
  let component: PrivateTermComponent;
  let fixture: ComponentFixture<PrivateTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
