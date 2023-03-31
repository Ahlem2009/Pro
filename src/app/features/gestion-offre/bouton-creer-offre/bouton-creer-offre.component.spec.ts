import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCreerOffreComponent } from './bouton-creer-offre.component';

describe('BoutonCreerOffreComponent', () => {
  let component: BoutonCreerOffreComponent;
  let fixture: ComponentFixture<BoutonCreerOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCreerOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonCreerOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
