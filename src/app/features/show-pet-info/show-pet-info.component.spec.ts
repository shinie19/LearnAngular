import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPetInfoComponent } from './show-pet-info.component';

describe('ShowPetInfoComponent', () => {
  let component: ShowPetInfoComponent;
  let fixture: ComponentFixture<ShowPetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPetInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
