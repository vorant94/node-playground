import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildConditionalChildComponent } from './view-child-conditional-child.component';

describe('ViewChildConditionalChildComponent', () => {
  let component: ViewChildConditionalChildComponent;
  let fixture: ComponentFixture<ViewChildConditionalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildConditionalChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildConditionalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
