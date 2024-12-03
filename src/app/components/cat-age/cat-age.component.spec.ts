import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAgeComponent } from './cat-age.component';

describe('CatAgeComponent', () => {
  let component: CatAgeComponent;
  let fixture: ComponentFixture<CatAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
