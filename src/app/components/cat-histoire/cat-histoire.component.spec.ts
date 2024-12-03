import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHistoireComponent } from './cat-histoire.component';

describe('CatHistoireComponent', () => {
  let component: CatHistoireComponent;
  let fixture: ComponentFixture<CatHistoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatHistoireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatHistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
