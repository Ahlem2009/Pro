import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesAffichantCategoriesComponent } from './cartes-affichant-categories.component';

describe('CartesAffichantCategoriesComponent', () => {
  let component: CartesAffichantCategoriesComponent;
  let fixture: ComponentFixture<CartesAffichantCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesAffichantCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartesAffichantCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
