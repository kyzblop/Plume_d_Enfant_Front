import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGeneratedPageComponent } from './story-generated-page.component';

describe('StoryGeneratedPageComponent', () => {
  let component: StoryGeneratedPageComponent;
  let fixture: ComponentFixture<StoryGeneratedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryGeneratedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryGeneratedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
