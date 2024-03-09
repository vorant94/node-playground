import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildStaticChildComponent } from './view-child-static-child.component';

describe('ViewChildStaticChildComponent', () => {
  let component: ViewChildStaticChildComponent;
  let fixture: ComponentFixture<ViewChildStaticChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildStaticChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildStaticChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
