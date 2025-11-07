import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasStandalone } from './personas-standalone';

describe('PersonasStandalone', () => {
  let component: PersonasStandalone;
  let fixture: ComponentFixture<PersonasStandalone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasStandalone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasStandalone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
