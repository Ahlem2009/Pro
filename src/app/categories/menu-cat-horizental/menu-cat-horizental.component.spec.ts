import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatHorizentalComponent } from './menu-cat-horizental.component';

describe('MenuCatHorizentalComponent', () => {
  let component: MenuCatHorizentalComponent;
  let fixture: ComponentFixture<MenuCatHorizentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatHorizentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCatHorizentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
