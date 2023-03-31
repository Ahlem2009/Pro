import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCategorieComponent } from './affiche-categorie.component';

describe('AfficheCategorieComponent', () => {
  let component: AfficheCategorieComponent;
  let fixture: ComponentFixture<AfficheCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
