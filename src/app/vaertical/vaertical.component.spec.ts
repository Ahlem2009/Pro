import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaerticalComponent } from './vaertical.component';

describe('VaerticalComponent', () => {
  let component: VaerticalComponent;
  let fixture: ComponentFixture<VaerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
