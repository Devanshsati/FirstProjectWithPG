import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlstatementComponent } from './controlstatement.component';

describe('ControlstatementComponent', () => {
  let component: ControlstatementComponent;
  let fixture: ComponentFixture<ControlstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlstatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
