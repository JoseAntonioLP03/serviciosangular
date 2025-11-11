import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaFuncionmultiple } from './plantilla-funcionmultiple';

describe('PlantillaFuncionmultiple', () => {
  let component: PlantillaFuncionmultiple;
  let fixture: ComponentFixture<PlantillaFuncionmultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFuncionmultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaFuncionmultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
