import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcompComponent } from './parentcomp.component';

describe('ParentcompComponent', () => {
  let component: ParentcompComponent;
  let fixture: ComponentFixture<ParentcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
